
interface SWRConfigProps {
  fetchImageList: () => void;
}

const SWRConfig = ({ fetchImageList }: SWRConfigProps) => {
  const handleConfirm = async () => {
    // Implement confirmation logic here
    await fetchImageList();
  };

  return (
    <div className="swr-config">
      <input type="text" placeholder="Access Key" />
      <input type="text" placeholder="Secret Key" />
      <input type="text" placeholder="Endpoint" />
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default SWRConfig;
