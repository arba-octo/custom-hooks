type TProps = {
  width: string
};

const LinkLikeButton = (props: TProps) => {
  return (
    <a href="#" className={`${props.width} flex items-center justify-center bg-[#2b3b52] rounded-md text-white text-[15px] max-[1024px]:`}>
      Add custom Hook
    </a>
  );
};
export default LinkLikeButton;