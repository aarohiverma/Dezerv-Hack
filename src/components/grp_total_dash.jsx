import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './grp_total_dash.css';

const GrpDash = () => {
    const navigate = useNavigate();
    const [groupName, setGroupName] = useState('');
    const [groupId, setGroupId] = useState('');
    const [groups, setGroups] = useState([]); // Initially empty
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateGroup = async () => {
        if (groupName.trim() !== '') {
            try {
                const response = await axios.post('http://127.0.0.1:8000/game/create_group/', { group_name: groupName });
                if (response.status === 201) {
                    const newGroup = { id: response.data.group_id, name: groupName };
                    setGroups([...groups, newGroup]); // Add group if success
                    setErrorMessage('');
                } else {
                    setErrorMessage('Failed to create group. Try again.');
                }
            } catch (error) {
                setErrorMessage('Error creating group: ' + (error.response?.data?.error || 'Server error'));
            }
        }
    };

    const handleJoinGroup = async () => {
        if (groupId.trim() !== '') {
            try {
                const response = await axios.post('http://127.0.0.1:8000/game/join_group/', { group_id: groupId });
                if (response.status === 200) {
                    const newGroup = { id: groupId, name: `Group ${groupId}` };
                    setGroups([...groups, newGroup]); // Add joined group if success
                    setGroupId('');
                    setErrorMessage('');
                } else {
                    setErrorMessage('Failed to join group. Check ID.');
                }
            } catch (error) {
                setErrorMessage('Error joining group: ' + (error.response?.data?.error || 'Server error'));
            }
        }
    };

    return (
        <div className="groups-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Groups</h2>
                {groups.length === 0 ? (
                    <p>No groups yet. Create or join one!</p>
                ) : (
                    <ul>
                        {groups.map((group) => (
                            <li key={group.id}>
                                <button className="group-button">{group.name}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <h1>Your Groups</h1>
                <p>Welcome to your group dashboard!</p>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="groups-list">
                    {groups.length === 0 ? (
                        <p>No groups available. Create or join one to get started.</p>
                    ) : (
                        groups.map((group) => (
                            <div className="group-card" key={group.id}>
                                <h2>{group.name}</h2>
                                <p>Description of {group.name}</p>
                            </div>
                        ))
                    )}
                </div>

                {/* Create New Group */}
                <div className="group-action">
                    <h3>Create a New Group</h3>
                    <input 
                        type="text" 
                        placeholder="Enter group name" 
                        value={groupName} 
                        onChange={(e) => setGroupName(e.target.value)} 
                    />
                    <button onClick={handleCreateGroup}>Create</button>
                </div>

                {/* Join Group by ID */}
                <div className="group-action">
                    <h3>Join a Group by ID</h3>
                    <input 
                        type="text" 
                        placeholder="Enter group ID" 
                        value={groupId} 
                        onChange={(e) => setGroupId(e.target.value)} 
                    />
                    <button onClick={handleJoinGroup}>Join</button>
                </div>

                {/* Back Button */}
                <button className="back-button" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </main>
        </div>
    );
};

export default GrpDash;
