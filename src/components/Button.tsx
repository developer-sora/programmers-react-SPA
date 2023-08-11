export function Button({ ...props }) {
  return (
    <button
      css={{
        outline: "none",
        cursor: "pointer",
        borderRadius: "8px",
        width: "100%",
        background: "#1890ff",
        color: "#fff",
        fontSize: "1.2rem",
        border: "1px solid #40a9ff",
        padding: "10px",
        "&:hover": {
          backgroundColor: "#0050b3",
        },
      }}
      {...props}
    />
  );
}
