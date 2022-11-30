export function Button() {
  const isFormSubmitting = true;

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? "Carregando..." : "Enviar"}
    </button>
  );
}
