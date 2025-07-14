import React from 'react';
import '../styles/DashboardContent.css';

export default function DashboardContent({ view }) {
  return (
    <div className="content">
      {view === 'home' && (
        <>
          <div className="card"><h3>Total Jobs</h3><p>124 active listings</p></div>
          <div className="card"><h3>Messages</h3><p>10 unread messages</p></div>
          <div className="card"><h3>Applications</h3><p>45 applications submitted</p></div>
        </>
      )}

      {view === 'jobs' && (
        <div className="card">
          <h2>Job Listings</h2>
          <ul>
            <li>Frontend Developer – Google</li>
            <li>Backend Engineer – Amazon</li>
            <li>Full Stack Dev – Meta</li>
          </ul>
        </div>
      )}

      {view === 'messages' && (
        <div className="card">
          <h2>Messages</h2>
          <p>HR: "We reviewed your resume..."</p>
          <p>Recruiter: "Your interview is on Friday."</p>
        </div>
      )}

      {view === 'settings' && (
        <div className="card">
          <h2>Settings</h2>
          <p>Change password</p>
          <p>Theme preference (light/dark)</p>
        </div>
      )}
    </div>
  );
}
