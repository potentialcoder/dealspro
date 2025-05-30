"use client";
import React from "react";

export default function AttachmentsSection() {
  const attachments = [
    "File name.xls",
    "File name.pdf",
    "File name.doc",
    "File name.jpg",
    "File name.mp4",
  ];

  const milestones = [
    {
      id: 1,
      name: "First Milestone",
      date: "04-06-2025",
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10 from "de Finibus Bonorum et Malorum',
    },
    {
      id: 2,
      name: "First Milestone",
      date: "08-07-2025",
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10 from "de Finibus Bonorum et Malorum',
    },
  ];

  return (
    <section
    id="attachments"  
    className="attachments-section"
      aria-labelledby="attachments-heading"
    >
      <h2 id="attachments-heading" className="section-title">
        Attachments
      </h2>
      <div className="attachments-container">
        {attachments.map((attachment, index) => (
          <span key={index} className="attachment-tag">
            {attachment}
          </span>
        ))}
      </div>

      <div className="divider"></div>

      <h3 className="milestones-title">Milestone(s)</h3>
      <div className="table-container">
        <table
          className="milestones-table"
          role="table"
          aria-label="Project milestones"
        >
          <thead>
            <tr>
              <th scope="col" className="table-header">
                #
              </th>
              <th scope="col" className="table-header">
                Name
              </th>
              <th scope="col" className="table-header">
                Completion Date
              </th>
              <th scope="col" className="table-header">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {milestones.map((milestone) => (
              <tr key={milestone.id} className="table-row">
                <td className="table-cell">{milestone.id}</td>
                <td className="table-cell">{milestone.name}</td>
                <td className="table-cell">{milestone.date}</td>
                <td className="table-cell table-cell-description">
                  {milestone.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .attachments-section {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .attachments-section {
            padding: 16px;
            margin-bottom: 16px;
          }
        }
        .section-title {
          color: #222;
          font-family: Manrope;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px 0;
        }
        @media (max-width: 640px) {
          .section-title {
            font-size: 16px;
            margin-bottom: 16px;
          }
        }
        .attachments-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .attachments-container {
            gap: 8px;
          }
        }
        .attachment-tag {
          color: #222;
          font-family: Manrope;
          font-size: 14px;
          font-weight: 400;
          padding: 5px 10px;
          border-radius: 5px;
          background-color: #f5f2f2;
        }
        @media (max-width: 640px) {
          .attachment-tag {
            font-size: 12px;
          }
        }
        .divider {
          width: 100%;
          height: 1px;
          border-radius: 5px;
          border: 1px solid #222;
          opacity: 0.25;
          background-color: #fff;
          margin-bottom: 20px;
        }
        .milestones-title {
          color: #222;
          font-family: Manrope;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px 0;
        }
        @media (max-width: 640px) {
          .milestones-title {
            font-size: 16px;
            margin-bottom: 16px;
          }
        }
        .table-container {
          overflow-x: auto;
        }
        .milestones-table {
          width: 100%;
          border-collapse: collapse;
        }
        .table-row {
          border-bottom: 1px solid rgba(34, 34, 34, 0.25);
        }
        .table-header {
          color: #222;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 600;
          text-align: left;
          padding: 10px 8px;
        }
        @media (max-width: 640px) {
          .table-header {
            font-size: 14px;
          }
        }
        .table-cell {
          color: #222;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 400;
          padding: 10px 8px;
          vertical-align: top;
        }
        @media (max-width: 640px) {
          .table-cell {
            font-size: 14px;
          }
        }
        .table-cell-description {
          line-height: 22.5px;
        }
      `}</style>
    </section>
  );
}
