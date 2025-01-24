
interface GitHubActionTriggerProps {
  fetchWorkflowHistory: () => void;
}

const GitHubActionTrigger = ({ fetchWorkflowHistory }: GitHubActionTriggerProps) => {
  const handleExecuteWorkflow = async () => {
    // Implement execution of workflow (possibly trigger API call or GitHub action)
    await fetchWorkflowHistory();
  };

  return (
    <div className="github-action-trigger">
      <input type="text" placeholder="GitHub Token" />
      <input type="text" placeholder="Workflow URL" />
      <input type="text" placeholder="Image Name" />
      <button onClick={handleExecuteWorkflow}>Execute Workflow</button>
    </div>
  );
};

export default GitHubActionTrigger;
