import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './grp_total_dash.css';

const GrpDash = () => {
    const navigate = useNavigate();
    const user_id = localStorage.getItem('user_id');
    const [groupName, setGroupName] = useState('');
    const [joinGroupName, setJoinGroupName] = useState('');
    const [groups, setGroups] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/game/get_groups/${user_id}`);
                setGroups(response.data);
            } catch (err) {
                setErrorMessage(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user_id]);

    const handleCreateGroup = async () => {
        if (groupName.trim() !== "") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/game/create_group/", {
                    group_name: groupName,
                    user_id: user_id,
                });
                if (response.status === 201) {
                    const newGroup = {
                        group_id: response.data.group_id,
                        group_name: response.data.group_name,
                        current_balance: 0
                    };
                    setGroups([...groups, newGroup]);
                    setGroupName("");
                    setErrorMessage("");
                } else {
                    setErrorMessage("Failed to create group. Try again.");
                }
            } catch (error) {
                setErrorMessage("Error creating group: " + (error.response?.data?.error || "Server error"));
            }
        }
    };

    const handleJoinGroup = async () => {
        if (joinGroupName.trim() !== '') {
            try {
                const response = await axios.post('http://127.0.0.1:8000/game/join_group/', {
                    user_id: user_id,
                    group_name: joinGroupName
                });
                if (response.status === 201) {
                    // Refresh the groups list after joining
                    const updatedResponse = await axios.get(`http://127.0.0.1:8000/game/get_groups/${user_id}`);
                    setGroups(updatedResponse.data);
                    setJoinGroupName('');
                    setErrorMessage('');
                } else {
                    setErrorMessage('Failed to join group. Check group name.');
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
                            <li key={group.group_id}>
                                <button className="group-button">{group.group_name}</button>
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
                            <div className="group-card" key={group.group_id}>
                                <h2>{group.group_name}</h2>
                              
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

                {/* Join Group */}
                <div className="group-action">
                    <h3>Join a Group</h3>
                    <input 
                        type="text" 
                        placeholder="Enter group name" 
                        value={joinGroupName} 
                        onChange={(e) => setJoinGroupName(e.target.value)} 
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