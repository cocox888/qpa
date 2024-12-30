"use client";

import SimpleCard2 from "@/components/card/simpleCard2";
import {
  CompleteIcon,
  DueIcon,
  PendingIcon,
  ProgressIcon,
} from "@/components/Icons/TaskIcons";
import EditTaskModal, { TaskItem } from "@/components/modal/editTaskModal";
import TasklistItem from "@/components/TasklistItem";
import { useState } from "react";

export default function Projects() {
  const [editModal, setEditModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [taskData, setTaskData] = useState<TaskItem>({
    title: "",
    project: "",
    hours: "",
    members: 0,
    state: "",
    time: "",
    company: "",
    startTime: "",
  });

  const [count, setCount] = useState(4);
  const handleTask = (i: number, data: TaskItem) => {
    setIndex(i);
    setTaskData(data);
    setEditModal(true);
  };

  const handleDelete = () => {
    console.log("delete");
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="pt-20 pl-64 pr-6 min-h-screen w-screen overflow-x-hidden">
      <div className=" mx-auto space-y-6">
        {/* <!-- Header Section --> */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Task List</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track your tasks across all projects
            </p>
          </div>
          <button
            data-new-task
            onClick={() => handleTask(0, {})}
            className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Task
          </button>
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SimpleCard2
            count={24}
            title="Pending"
            icon={PendingIcon}
            color="blue"
          />
          <SimpleCard2
            count={12}
            title="In Progress"
            icon={ProgressIcon}
            color="yellow"
          />
          <SimpleCard2
            count={128}
            title="Completed"
            icon={CompleteIcon}
            color="green"
          />
          <SimpleCard2
            count={8}
            title="Due Today"
            icon={DueIcon}
            color="purple"
          />
        </div>

        {/* <!-- Main Content --> */}
        <div className="bg-white rounded-xl border border-gray-100">
          {/* <!-- Filters Bar --> */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  data-filter="all"
                  className="px-4 py-2 text-sm font-medium rounded-lg text-brand-500 bg-brand-50"
                >
                  All Tasks
                  <span
                    data-all-count
                    className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                  >
                    128
                  </span>
                </button>
                <button
                  data-filter="my"
                  className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  My Tasks
                  <span
                    data-my-count
                    className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                  >
                    45
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    data-search-input
                    className="w-64 h-10 pl-10 pr-4 text-sm bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-brand-500/20"
                  />
                  <svg
                    className="w-4 h-4 absolute left-3 top-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button
                  data-filter-btn
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Task List --> */}
          <div className="p-4 space-y-2">
            {Array.from({ length: count }, (_, index) => index + 1).map(
              (item, index) => {
                return (
                  <TasklistItem
                    key={index}
                    title="Update user dashboard interface"
                    project="Website Redesign Project"
                    hours="32h 45m"
                    state="In Progress"
                    time="Due Tomorrow"
                    members={2}
                    company="TechCorp Inc"
                    startTime="Started:Oct 15,2024"
                    onDetail={handleTask}
                    onDelete={handleDelete}
                  />
                );
              }
            )}
            {/* <TasklistItem title="Update user dashboard interface"
                        //     project="Website Redesign Project"
                        //     hours="32h 45m" state="In Progress" time="Due Tomorrow"
                        //     members={2} company="TechCorp Inc" startTime="Started:Oct 15,2024"
                        //     onDetail={handleTask} />
                        // <TasklistItem title="Design system updates"
                        //     project="Brand Guidelines"
                        //     hours="18h 20m" state="Completed" time="Today"
                        //     members={1} company="DesignCo Ltd" startTime="Started:Oct 12,2024"
                        //     onDetail={handleTask} /> */}
          </div>
        </div>
      </div>
      {editModal ? (
        <>
          <EditTaskModal
            closeModal={()=>setEditModal(false)}
            flag={index}
            data={taskData}
          />
          <div
            id="taskModalOverlay"
            className="active modal-overlay fixed inset-0 bg-black/50 z-[100] transition-all duration-300"
            onClick={() => setEditModal(false)}
          ></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
