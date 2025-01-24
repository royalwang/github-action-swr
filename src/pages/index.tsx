import { useState } from 'react';
import axios from 'axios';
import GitHubActionTrigger from '../components/GitHubActionTrigger';
import SWRConfig from '../components/SWRConfig';
import "@/app/globals.css"

interface Workflow {
    name: string;
    status: string;
    startedAt: string;
}

interface Image {
    name: string;
    tags: string[];
}

const Home = () => {
    const [workflowHistory, setWorkflowHistory] = useState<Workflow[]>([]);
    const [imageList, setImageList] = useState<Image[]>([]);

    // Fetch workflow history
    const fetchWorkflowHistory = async () => {
        const response = await axios.get<Workflow[]>('/api/workflow-history');
        setWorkflowHistory(response.data);
    };

    // Fetch image list
    const fetchImageList = async () => {
        const response = await axios.get<Image[]>('/api/image-list');
        setImageList(response.data);
    };

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="left-section">
                <GitHubActionTrigger fetchWorkflowHistory={fetchWorkflowHistory} />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Workflow History</h2>
                    {workflowHistory.map((workflow, index) => (
                        <div key={index} className="p-2 border-b border-gray-300">
                            {workflow.name} - {workflow.status} - {workflow.startedAt}
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-section">
                <SWRConfig fetchImageList={fetchImageList} />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Image List</h2>
                    {imageList.map((image, index) => (
                        <div key={index} className="p-2 border-b border-gray-300">
                            {image.name} - {image.tags.join(', ')}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
