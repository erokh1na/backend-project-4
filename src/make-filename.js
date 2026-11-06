export default (path) => {
  const url = new URL(path);

  const address = `${url.host}${url.pathname}`.replace(/\/$/, "");
  const slug = address.replace(/[^a-zA-Z0-9]/g, "-");

  return `${slug}.html`;
};
