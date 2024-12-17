type TProps = {
  size: string
};

const LinkLikeButton = (props: TProps) => {
  return (
    <a href="#" className={`${props.size} flex items-center justify-center bg-[#2b3b52] rounded-md text-white text-[15px]`}>
      Add custom Hook
    </a>
  );
};
export default LinkLikeButton;