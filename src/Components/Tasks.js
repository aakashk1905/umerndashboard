import React, { useState } from "react";
import "./Task.css";

import progressimg from "../Assests/progressimg.png";
import bronze from "../Assests/broze Medal.svg";
import viewTask from "../Assests/viewtask.svg";
import viewFeedbackk from "../Assests/viewfeedback.png";
import uploadTask from "../Assests/uploadtask.png";
import expcoin from "../Assests/expcoin.svg";
import taskss from "./Tasks.json";
import level from "./Levels.json";
import SubmitTask from "./Tasks/SubmitTask";
import ViewFeedback from "./Tasks/ViewFeedback";
const Tasks = ({ tasks, user }) => {
  const [submitTask, setSubmitTask] = useState(false);
  const [viewFeedback, setViewFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const updates = {};
  tasks.forEach((task) => {
    updates[task.taskName] = task;
  });

  return (
    <div className="tasks-cont">
      {submitTask && (
        <SubmitTask setSubmitTask={setSubmitTask} taskName={data} />
      )}
      {viewFeedback && (
        <ViewFeedback
          setViewFeedback={setViewFeedback}
          setSubmitTask={setSubmitTask}
          feedback={feedback}
        />
      )}
      <div className="tasks-left-cont">
        <div className="tasks-left-head">
          <img src={progressimg} alt="progressimg" />
          <span>
            Your Task <b style={{ color: "#1ABA5B" }}>Progress</b>
          </span>
        </div>
        <div className="tl-mob-details-cont">
          <div className="tl-mob-det-top">
            <div className="tl-mob-det-top-text">
              <img src={uploadTask} alt="uploadTask" />
              Submit Task
            </div>
            <div className="tl-mob-det-top-text">
              <img src={viewTask} alt="uploadTask" />
              View Task
            </div>
            <div className="tl-mob-det-top-text">
              <img src={viewFeedbackk} alt="uploadTask" />
              Feedback
            </div>
          </div>
          <div className="tl-mob-det-btm">
            <div className="tl-mob-det-btm-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <g filter="url(#filter0_df_264_1109)">
                  <circle cx="13.5" cy="13" r="5" fill="#FFCF33" />
                </g>
                <defs>
                  <filter
                    id="filter0_df_264_1109"
                    x="0.5"
                    y="0"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_264_1109"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_264_1109"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect2_foregroundBlur_264_1109"
                    />
                  </filter>
                </defs>
              </svg>
              Pending Review
            </div>
            <div className="tl-mob-det-btm-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g filter="url(#filter0_df_264_1112)">
                  <circle cx="13" cy="13" r="5" fill="#FF5A5A" />
                </g>
                <defs>
                  <filter
                    id="filter0_df_264_1112"
                    x="0"
                    y="0"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_264_1112"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_264_1112"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect2_foregroundBlur_264_1112"
                    />
                  </filter>
                </defs>
              </svg>
              Rejected
            </div>
            <div className="tl-mob-det-btm-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <g filter="url(#filter0_df_264_1115)">
                  <circle cx="13.5" cy="13" r="5" fill="#51B846" />
                </g>
                <defs>
                  <filter
                    id="filter0_df_264_1115"
                    x="0.5"
                    y="0"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_264_1115"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_264_1115"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect2_foregroundBlur_264_1115"
                    />
                  </filter>
                </defs>
              </svg>
              Approved
            </div>
          </div>
        </div>
        <div className="tasks-info-cont">
          <div className="tasks-info-row thead">
            <div className="task-info-col theadcol tic-no">No.</div>
            <div className="task-info-col theadcol">Task Name</div>
            <div className="task-info-col theadcol">Points</div>
            <div className="task-info-col theadcol">Actions</div>
            <div className="task-info-col theadcol">Status</div>
          </div>
          <div className="tasks-det-cont">
            {taskss.map((t, ind) => {
              return (
                <div className="tasks-info-row" key={ind}>
                  <div className="task-info-col tic-no">
                    <div className="task-num">{ind + 1}</div>
                  </div>
                  <div className="task-info-col">{t.name}</div>
                  <div className="task-info-col">
                    <div className="task-exp-cont">
                      <img src={expcoin} alt="expcoin"></img>
                      {t.points} XP
                    </div>
                  </div>

                  <div className="task-info-col">
                    {updates.hasOwnProperty(t.nameid) ? (
                      updates[t.nameid]?.status === "submitted" ? (
                        <div
                          className="task-submit-btn"
                          style={{ color: "#fff" }}
                          onClick={() =>
                            window.open(updates[t.nameid]?.taskLink, "_blank")
                          }
                        >
                          <div>View Task</div>
                          <img src={viewTask} alt="uploadTask" />
                        </div>
                      ) : (
                        <div
                          className="task-submit-btn"
                          style={{ color: "#51B846" }}
                          onClick={() => {
                            const feed = {
                              feedback: updates[t.nameid]?.feedback || "",
                              task: updates[t.nameid].taskLink,
                              rejected: updates[t.nameid].status === "rejected",
                            };
                            setData(t.nameid);
                            setFeedback(feed);
                            setViewFeedback(true);
                          }}
                        >
                          <div>View Feedback </div>
                          <img src={viewFeedbackk} alt="uploadTask" />
                        </div>
                      )
                    ) : (
                      <div
                        className="task-submit-btn"
                        onClick={() => {
                          setData(t.nameid);
                          setSubmitTask(true);
                        }}
                      >
                        <div>Submit Task</div>
                        <img src={uploadTask} alt="uploadTask" />
                      </div>
                    )}
                  </div>
                  <div className="task-info-col">
                    {updates.hasOwnProperty(t.nameid) ? (
                      updates[t.nameid]?.status === "submitted" ? (
                        <div
                          className="task-status-btn"
                          style={{ color: "#FFCF33" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <g filter="url(#filter0_df_194_752)">
                              <circle cx="13" cy="13.5" r="5" fill="#FFCF33" />
                            </g>
                            <defs>
                              <filter
                                id="filter0_df_194_752"
                                x="0"
                                y="0.5"
                                width="26"
                                height="26"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_194_752"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_194_752"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="2"
                                  result="effect2_foregroundBlur_194_752"
                                />
                              </filter>
                            </defs>
                          </svg>
                          <div>Review Pending</div>
                        </div>
                      ) : updates[t.nameid]?.status === "approved" ? (
                        <div
                          className="task-status-btn"
                          style={{ color: "#51B846" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <g filter="url(#filter0_df_194_780)">
                              <circle cx="13" cy="13.5" r="5" fill="#51B846" />
                            </g>
                            <defs>
                              <filter
                                id="filter0_df_194_780"
                                x="0"
                                y="0.5"
                                width="26"
                                height="26"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_194_780"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_194_780"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="2"
                                  result="effect2_foregroundBlur_194_780"
                                />
                              </filter>
                            </defs>
                          </svg>
                          <div>Approved</div>
                        </div>
                      ) : (
                        <div className="task-status-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                          >
                            <g filter="url(#filter0_df_194_766)">
                              <circle
                                cx="13.5"
                                cy="13.5"
                                r="5"
                                fill="#FF5A5A"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_df_194_766"
                                x="0.5"
                                y="0.5"
                                width="26"
                                height="26"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_194_766"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_194_766"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="2"
                                  result="effect2_foregroundBlur_194_766"
                                />
                              </filter>
                            </defs>
                          </svg>
                          <div>Rejected</div>
                        </div>
                      )
                    ) : (
                      <div className="task-status-btn pending-sub">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                        >
                          <g filter="url(#filter0_df_194_738)">
                            <circle cx="13.5" cy="13.5" r="5" fill="#FF5A5A" />
                          </g>
                          <defs>
                            <filter
                              id="filter0_df_194_738"
                              x="0.5"
                              y="0.5"
                              width="26"
                              height="26"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_194_738"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_194_738"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect2_foregroundBlur_194_738"
                              />
                            </filter>
                          </defs>
                        </svg>
                        <div>Pending Submission</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tasks-right-cont">
        <div className="tr-top-cont">
          <div className="tr-top-expoints">
            <img src={expcoin} alt="expcoin"></img>
            Experience Points!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_194_872)">
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM9 15.75C7.66498 15.75 6.35994 15.3541 5.2499 14.6124C4.13987 13.8707 3.27471 12.8165 2.76382 11.5831C2.25293 10.3497 2.11925 8.99251 2.3797 7.68314C2.64015 6.37377 3.28303 5.17103 4.22703 4.22703C5.17104 3.28302 6.37377 2.64015 7.68314 2.3797C8.99252 2.11925 10.3497 2.25292 11.5831 2.76381C12.8165 3.2747 13.8707 4.13987 14.6124 5.2499C15.3541 6.35993 15.75 7.66498 15.75 9C15.7478 10.7895 15.036 12.5052 13.7706 13.7706C12.5052 15.036 10.7895 15.7478 9 15.75Z"
                  fill="white"
                />
                <path
                  d="M8.65881 7.15893H8.43381C8.13904 7.15169 7.8522 7.25481 7.62952 7.44808C7.40683 7.64135 7.26437 7.91082 7.23006 8.20368C7.21043 8.49664 7.30613 8.78568 7.49671 9.00905C7.68729 9.23242 7.95765 9.37243 8.25006 9.39918V12.8867C8.25006 13.185 8.36859 13.4712 8.57956 13.6822C8.79054 13.8931 9.07669 14.0117 9.37506 14.0117C9.67343 14.0117 9.95958 13.8931 10.1706 13.6822C10.3815 13.4712 10.5001 13.185 10.5001 12.8867V9.00018C10.5001 8.51185 10.3061 8.04352 9.96078 7.69822C9.61547 7.35291 9.14714 7.15893 8.65881 7.15893Z"
                  fill="white"
                />
                <path
                  d="M8.87294 6.34976C9.12749 6.34976 9.37632 6.27428 9.58797 6.13286C9.79961 5.99144 9.96457 5.79044 10.062 5.55527C10.1594 5.3201 10.1849 5.06133 10.1352 4.81168C10.0856 4.56202 9.96298 4.3327 9.78299 4.15271C9.603 3.97272 9.37368 3.85015 9.12403 3.80049C8.87437 3.75083 8.6156 3.77631 8.38043 3.87372C8.14526 3.97113 7.94426 4.13609 7.80284 4.34774C7.66142 4.55938 7.58594 4.80821 7.58594 5.06276C7.58584 5.2318 7.61906 5.3992 7.6837 5.55539C7.74835 5.71158 7.84314 5.8535 7.96267 5.97302C8.0822 6.09255 8.22412 6.18735 8.38031 6.25199C8.5365 6.31663 8.7039 6.34986 8.87294 6.34976Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_194_872">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="tr-top-mid">
            <div className="tr-mid">
              <div className="tr-mid-bronze-img">
                <img src={bronze} alt="bronze" />
              </div>
              <div>
                <div className="tr-mid-text">League</div>
                <div className="tr-mid-head">
                  {(user?.userDetails?.level === "Bronze III"
                    ? "Bronze III"
                    : user?.userDetails?.level) || "Bronze III"}
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                >
                  <circle
                    cx="4.5"
                    cy="5"
                    r="4.5"
                    fill="white"
                    fillOpacity="0.05"
                  />
                </svg>
              </div>
              <div className="tr-mid-exp-pts">
                {user?.userDetails?.points || "0"} XP
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_194_882)">
                <path
                  d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3607C16.6736 20.0479 14.3861 20.9971 12 21Z"
                  fill="white"
                />
                <path
                  d="M11.5451 9.54528H11.2451C10.8521 9.53562 10.4696 9.67312 10.1727 9.93081C9.87578 10.1885 9.68583 10.5478 9.64007 10.9383C9.61391 11.3289 9.74151 11.7143 9.99562 12.0121C10.2497 12.3099 10.6102 12.4966 11.0001 12.5323V17.1823C11.0001 17.5801 11.1581 17.9616 11.4394 18.2429C11.7207 18.5242 12.1023 18.6823 12.5001 18.6823C12.8979 18.6823 13.2794 18.5242 13.5607 18.2429C13.8421 17.9616 14.0001 17.5801 14.0001 17.1823V12.0003C14.0001 11.3492 13.7414 10.7247 13.281 10.2643C12.8206 9.80393 12.1962 9.54528 11.5451 9.54528Z"
                  fill="white"
                />
                <path
                  d="M11.8303 8.4663C12.1697 8.4663 12.5014 8.36566 12.7836 8.1771C13.0658 7.98855 13.2858 7.72055 13.4156 7.40699C13.5455 7.09343 13.5795 6.7484 13.5133 6.41553C13.4471 6.08266 13.2837 5.77689 13.0437 5.53691C12.8037 5.29692 12.4979 5.13349 12.165 5.06727C11.8322 5.00106 11.4871 5.03505 11.1736 5.16493C10.86 5.29481 10.592 5.51475 10.4035 5.79694C10.2149 6.07914 10.1143 6.41091 10.1143 6.7503C10.1141 6.97569 10.1584 7.19889 10.2446 7.40714C10.3308 7.6154 10.4572 7.80462 10.6166 7.96399C10.7759 8.12336 10.9652 8.24976 11.1734 8.33595C11.3817 8.42214 11.6049 8.46643 11.8303 8.4663Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_194_882">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="tr-top-submid-cont">
            <div className="tr-submid-progress">
              <div>{level[user?.userDetails?.level].start} XP</div>
              <div>{level[user?.userDetails?.level].end + 1} XP</div>
            </div>
            <div className="tr-prog-bar">
              <div
                className="tr-prog-bar-col"
                style={{
                  width: `${
                    ((user?.userDetails?.points -
                      level[user?.userDetails?.level].start) /
                      (level[user?.userDetails?.level].end -
                        level[user?.userDetails?.level].start)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <div className="tr-submid-progress">
              <div>{user?.userDetails?.level}</div>
              <div>
                <b>
                  {level[user?.userDetails?.level].end -
                    user?.userDetails?.points +
                    1}
                  XP{" "}
                </b>
                to Level UP
              </div>
            </div>
          </div>
          <div className="tr-top-btm-cont">
            <span>
              {" "}
              Get Your Next Task Approved to gain
              <b style={{ color: "#fff", fontWeight: "600" }}> Points</b>
            </span>
            <img src={expcoin} alt="excoin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
