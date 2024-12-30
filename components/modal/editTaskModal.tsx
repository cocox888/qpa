export interface TaskItem {
  title?: string;
  project?: string;
  hours?: string;
  members?: number;
  state?: string;
  time?: string;
  company?: string;
  startTime?: string;
}

interface EditTaskModalProps {
  closeModal: () => void;
  flag: number;
  data: TaskItem;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  closeModal,
  flag,
  data,
}) => {
  const { title } = data;

  return (
    <div
      id="taskModal"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 w-[650px] max-h-[90vh] overflow-y-auto z-[101] transition-all duration-300"
    >
      <form id="newTaskForm" className="relative">
        {/* <!-- Header --> */}
        <div className="sticky top-0 z-10 bg-white px-8 py-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {flag == 0 ? "Create New Task" : "Edit Task"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {flag == 0
                  ? "Add a new task to your project"
                  : "Edit Task of your current project"}
              </p>
            </div>
            <button
              type="button"
              data-close-modal
              onClick={closeModal}
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-xl transition-all"
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
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Form Content --> */}
        <div className="p-8 space-y-8 bg-white">
          {/* <!-- Task Title --> */}
          <div className="space-y-2">
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="taskTitle"
              name="taskTitle"
              required
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
              placeholder="Enter task title"
              value={flag == 1 ? title : ""}
            />
          </div>

          {/* <!-- Project Selection --> */}
          <div className="space-y-2">
            <label
              htmlFor="project"
              className="block text-sm font-medium text-gray-700"
            >
              Project <span className="text-red-500">*</span>
            </label>
            <select
              id="project"
              name="project"
              required
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
            >
              <option value="">Select Project</option>
              <option value="website-redesign">Website Redesign</option>
              <option value="marketing-campaign">Marketing Campaign</option>
              <option value="brand-guidelines">Brand Guidelines</option>
            </select>
          </div>

          {/* <!-- Due Date & Priority --> */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                required
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
          </div>

          {/* <!-- Assignees --> */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Assign Team Members
            </label>

            {/* <!-- Search Input --> */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members..."
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
                id="teamSearch"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-3 text-gray-400"
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

            {/* <!-- Selected Members --> */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-xs font-medium text-gray-500 mb-3">
                Selected Members
              </div>
              <div className="flex flex-wrap gap-2" id="selectedMembers">
                {/* <!-- Selected members will be added here --> */}
              </div>
              {/* <!-- Empty state for no selections --> */}
              <div
                id="noSelectionsMessage"
                className="text-sm text-gray-500 text-center py-2"
              >
                No team members selected
              </div>
            </div>

            {/* <!-- Dropdown Results --> */}
            <div
              className="max-h-[200px] overflow-y-auto bg-white rounded-xl border border-gray-200 shadow-lg hidden"
              id="searchResults"
            >
              <div className="p-2 space-y-1">
                {/* <!-- Results will be populated here --> */}
              </div>
              {/* <!-- No Results State --> */}
              <div id="noResultsState" className="hidden p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  No team members found
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Try searching with a different term
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors resize-none"
              placeholder="Enter task description"
            ></textarea>
          </div>

          {/* <!-- Estimated Time --> */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Estimated Time
            </label>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="estimatedHours"
                  name="estimatedHours"
                  min="0"
                  className="w-20 h-11 px-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-center"
                  placeholder="0"
                />
                <span className="text-sm font-medium text-gray-600">hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="estimatedMinutes"
                  name="estimatedMinutes"
                  min="0"
                  max="59"
                  className="w-20 h-11 px-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-center"
                  placeholder="0"
                />
                <span className="text-sm font-medium text-gray-600">mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="sticky bottom-0 px-8 py-6 bg-white border-t border-gray-100">
          <div className="flex items-center justify-end gap-3">
            <div
              
              onClick={closeModal}
              className="cursor-pointer px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-brand-500/20 transition-colors"
            >
              Cancel
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white bg-brand-500 border border-transparent rounded-xl hover:bg-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-colors"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;
