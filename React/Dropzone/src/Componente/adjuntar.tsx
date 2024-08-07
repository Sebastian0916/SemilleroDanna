import { useState, useEffect } from "react";
import { AttachFile, CancelOutlined, UploadFileOutlined, DeleteOutlineOutlined, SyncOutlined } from "@mui/icons-material";
import { Box, Button,  IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

export const AdjuntarArchivo = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadingFiles, setUploadingFiles] = useState<Map<string, number>>(new Map());

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.reduce((acc, file) => {
        acc[file.name] = 0; 
        return acc;
      }, {} as Record<string, number>);

      setUploadingFiles(new Map([...uploadingFiles, ...Object.entries(newFiles)]));
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

    useEffect(() => {
    const intervals: Map<string, number> = new Map();

    uploadingFiles.forEach((_, fileName) => {
      const intervalId = window.setInterval(() => {
        setUploadingFiles((prev) => {
          const progress = prev.get(fileName) || 0;
          if (progress >= 100) {
            clearInterval(intervalId);
            return new Map(prev).set(fileName, 100);
          }
          return new Map(prev).set(fileName, progress + 10);
        });
      }, 500);
      intervals.set(fileName, intervalId);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [uploadingFiles]);

  const Delete = (name: string) => {
    setFiles((prevFiles) => prevFiles.filter((x) => x.name !== name));
    setUploadingFiles((prev) => {
      const updated = new Map(prev);
      updated.delete(name);
      return updated;
    });
  };

  const handleReplace = (name: string) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*, .docx, .xml, .png, .jpg';

    fileInput.onchange = (x) => {
      if (x.target instanceof HTMLInputElement){
        const file = x.target.files?.[0];
        if (file){
          setFiles((prevFiles) =>{
            return prevFiles.map(f => f.name === name ? file : f);
          });

          setUploadingFiles(prev =>{
            const updated = new Map(prev);
            updated.set(name,0)
            return updated;
          });

          const newFiles = {[file.name]: 0};
          setUploadingFiles(new Map([...uploadingFiles, ...Object.entries(newFiles)]));
        }
      }
    };
  
    fileInput.click()

  };
  return (
    <Stack alignItems="center" bgcolor="background.default" height="100vh" width='100%' gap={1}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={1}
        py={2}
        px={3}
        minWidth="450px"
        sx={{ 
            border: "1px dashed grey",
            cursor: "pointer",
            ':hover': {
                backgroundColor: "primary.50"
            }
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src="../src/assets/imagenes/div.svg" alt="icon" />
        <Stack gap={0.5}>
          <Typography variant="body2" color={"text.primary"}>
            Arrastrar o adjuntar archivos
          </Typography>
          <Typography variant="caption" color="text.secondary">
            DOCX, XML, PNG, JPG • Max 00 MB
          </Typography>
        </Stack>
        <Button startIcon={<AttachFile fontSize="small" />} size="small">
          Adjuntar archivo
        </Button>
      </Stack>

      <Stack minWidth="500px" overflow="hidden" height="auto" minHeight="300px" gap={1}>
        {files.map((file) => (
          <Stack
            key={file.name}
            flexDirection="row"
            gap={1}
            p={1}
            borderRadius={0.5}
            sx={{
              ":hover": {
                backgroundColor: "primary.50",
              },
            }}
          >
            <Stack flexDirection="row" width="100%" gap={1}>
              <Box display="flex" justifyContent={"center"} alignItems="center">
                <IconButton size="small">
                  <UploadFileOutlined color="primary" fontSize="small" />
                </IconButton>
              </Box>
              <Stack width="100%" alignContent="center">
                <Stack flexDirection="column">
                  <Typography variant="body2" color="text.primary">{file.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date().toLocaleDateString()} ° {Math.round(file.size / 1024)} KB
                  </Typography>
                </Stack>
                <LinearProgress color="primary" variant="determinate" value={uploadingFiles.get(file.name) || 0} />
              </Stack>
            </Stack>
            <Box display="flex" justifyContent={"center"} alignItems="center">
              {uploadingFiles.get(file.name) === 100 ? (
                <>
                  <IconButton size="small" >
                    <SyncOutlined fontSize="small"  onClick={() => handleReplace(file.name)}/>
                  </IconButton>
                  <IconButton size="small" onClick={() => Delete(file.name)}>
                    <DeleteOutlineOutlined fontSize="small" />
                  </IconButton>
                </>
              ) : (
                <Button size="small" onClick={() => Delete(file.name)}>
                  <CancelOutlined fontSize="small" />          
                </Button>
              )}
            </Box>
            
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
