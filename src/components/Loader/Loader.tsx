import LoadSpinner from "../../assets/load-spinner.png";
import { LoaderContainer, LoaderImage } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src={LoadSpinner} />
    </LoaderContainer>
  );
};

export default Loader;
