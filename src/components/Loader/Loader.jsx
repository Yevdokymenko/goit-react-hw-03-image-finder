import { ThreeDots } from 'react-loader-spinner';
import { ThreeDotsWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <ThreeDotsWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ThreeDotsWrapper>
  );
};
