import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface TextFieldsProps {
  state: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextFields({ state, changeHandler }: TextFieldsProps) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={state} onChange={changeHandler} label="User Name" />
    </Box>
  );
}
