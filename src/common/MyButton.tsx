import Button from "@mui/material/Button";

export default function MyButton({
  buttonClick,
  title,
  bgColor,
  hoverBg,
}: any) {
  return (
    <Button
      variant="contained"
      onClick={buttonClick}
      sx={{
        backgroundColor: bgColor,
        width: 200,
        color: "white",
        outline: "none",
        border: 0,

        "&:hover": {
          backgroundColor: hoverBg,
          border: 0,
        },
        "&:focusVisible": {
          outline: "none !important",
          border: 0,
        },
      }}
    >
      {title}
    </Button>
  );
}
