import { useState, useCallback, useMemo } from "react";
import { AttachFile, CancelOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { SincoTheme } from "@sinco/react";



export const AdjuntarArchivo = () => {
  const [archivos, setArchivos] = useState<File[]>(() => {
    const guardarArchivo = localStorage.getItem("archivos");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return guardarArchivo ? JSON.parse(guardarArchivo).map((file: any) => new File([file], file.name)) : [];
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [actualizarArchivos, setActualizarArchivos] = useState<Map<string, number>>(new Map());

  const { getRootProps, getInputProps } = useMemo(() => {
    return useDropzone({
      multiple: true,
      onDrop: (acceptedFiles) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const newFileNames = acceptedFiles.map(file => file.name);
        setActualizarArchivos(prev => {
          const newMap = new Map<string, number>([
            ...prev,
            ...acceptedFiles.map(file => [file.name, 0] as [string, number])
          ]);
          return newMap;
        });

        setArchivos(prev => {
          const updatedFiles = [...prev, ...acceptedFiles];
          localStorage.setItem("archivos", JSON.stringify(updatedFiles.map(file => ({ name: file.name, size: file.size }))));
          return updatedFiles;
        });
      },
    })
  }, [setActualizarArchivos, setArchivos])

  const Delete = useCallback((e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    e.preventDefault();
    setArchivos(prevFiles => {
      const updatedFiles = prevFiles.filter(file => file.name !== name);
      localStorage.setItem("archivos", JSON.stringify(updatedFiles.map(file => ({ name: file.name, size: file.size }))));
      return updatedFiles;
    });
    setActualizarArchivos(prev => {
      const updated = new Map(prev);
      updated.delete(name);
      return updated;
    });
  }, [setArchivos, setActualizarArchivos]);

  return (
    <Stack width={"100%"} alignItems="center" bgcolor="transparent" height="100%" gap={1}>
      <Stack
        id="dropzone"
        alignItems="center"
        justifyContent="center"
        bgcolor="transparent"
        width="100%"
        gap={1}
        borderRadius={1}
        py={3}
        sx={{
          border: `1px dashed ${SincoTheme.palette.grey[500]}`,
          cursor: "pointer",
          ':hover': {
            backgroundColor: "action.hover"
          }
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src="src/assets/imagenes/logoAdjuntarArchivos.svg" alt="icon" />
        <Stack gap={0.5}>
          <Typography variant="body2" color={"text.primary"}>
            Arrastrar o adjuntar archivos
          </Typography>
          <Typography variant="caption" color="text.secondary">
            DOCX, XML, PNG, JPG • Max 00 MB
          </Typography>
        </Stack>
        <Button size="small" startIcon={<AttachFile fontSize="inherit" />} >
          Adjuntar archivo
        </Button>
      </Stack>

      <Stack
        id="informacion"
        width="100%"
        height="auto"
        gap={1}
        sx={{
          overflowY: "auto"
        }}
      >
        {archivos.map((file, index) => (
          <Stack
            flexDirection="row"
            key={`${file.name}-${index}`}
            width="100%"
            gap={1}
            borderRadius={0.5}
            sx={{
              ":hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <Stack width="100%" alignItems="center" flexDirection="row" gap={2} p={1}>
              <Stack width="100%" flexDirection="row" alignItems="center" gap={.5}>
                <UploadFileOutlined color="primary" fontSize="small" />
                <Stack flexDirection="column">
                  <Typography variant="body2" color="text.primary">{file.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date().toLocaleDateString()} ° {Math.round(file.size / 1024)} KB
                  </Typography>
                </Stack>
                <LinearProgress color="primary" value={30} />
              </Stack>
            </Stack>
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <IconButton size="small" onClick={(e) => Delete(e, file.name)} >
                <CancelOutlined fontSize="small" />
              </IconButton>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};