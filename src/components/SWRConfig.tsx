interface SWRConfigProps {
    fetchImageList: () => void;
}

const SWRConfig = ({ fetchImageList }: SWRConfigProps) => {
    const handleConfirm = async () => {
        // Implement confirmation logic here
        await fetchImageList();
    };

    return (
        <div className="swr-config mb-6">
            <input
                type="text"
                placeholder="Access Key"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Secret Key"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Endpoint"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
                onClick={handleConfirm}
                className="w-full py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
                Confirm
            </button>
        </div>
    );
};

export default SWRConfig;
