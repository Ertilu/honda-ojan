import Home from "./(pages)/home";
import ReactQueryProvider from "./reactQueryProvider";

export default function Root() {
  return (
    <ReactQueryProvider>
      <Home />
    </ReactQueryProvider>
  );
}
