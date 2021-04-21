/*Converting class Class component using setState to 
functional component using useState hook
*/

function Theme() {
  const [theme, setTheme] = React.useState("light");

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

  return (
    <div className={theme}>
      {theme === "light" ? (
        <button onClick={toDark} Light></button>
      ) : (
        <button onClick={toLight}></button>
      )}
    </div>
  );
}
