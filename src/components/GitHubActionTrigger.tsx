interface GitHubActionTriggerProps {
    fetchWorkflowHistory: () => void;
}

const GitHubActionTrigger = ({ fetchWorkflowHistory }: GitHubActionTriggerProps) => {
    const handleExecuteWorkflow = async () => {
        // Implement execution of workflow (possibly trigger API call or GitHub action)
        await fetchWorkflowHistory();
    };

    return (
        <div className="github-action-trigger mb-6">
            <input
                type="text"
                placeholder="GitHub Token"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Workflow URL"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Image Name"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
                onClick={handleExecuteWorkflow}
                className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Execute Workflow
            </button>
        </div>
    );
};

export default GitHubActionTrigger;
