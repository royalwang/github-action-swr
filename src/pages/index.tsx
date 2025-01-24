
import { useState } from 'react';
import axios from 'axios';
import GitHubActionTrigger from '../components/GitHubActionTrigger';
import SWRConfig from '../components/SWRConfig';

const Home = () => {
  const [workflowHistory, setWorkflowHistory] = useState<any[]>([]);
  const [imageList, setImageList] = useState<any[]>([]);
  
  // Fetch workflow history
  const fetchWorkflowHistory = async () => {
    const response = await axios.get('/api/workflow-history');
    setWorkflowHistory(response.data);
  };

  // Fetch image list
  const fetchImageList = async () => {
    const response = await axios.get('/api/image-list');
    setImageList(response.data);
  };

  return (
    <div className="container">
      <GitHubActionTrigger fetchWorkflowHistory={fetchWorkflowHistory} />
      <SWRConfig fetchImageList={fetchImageList} />
      <div>
        <h2>Workflow History</h2>
        {workflowHistory.map((workflow, index) => (
          <div key={index}>{workflow.name} - {workflow.status} - {workflow.startedAt}</div>
        ))}
      </div>
      <div>
        <h2>Image List</h2>
        {imageList.map((image, index) => (
          <div key={index}>{image.name} - {image.tags.join(', ')}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
