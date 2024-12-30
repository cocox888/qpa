interface AddMemberModalProps {
    closeModal: (params: boolean) => void,
}


const AddMemberModal: React.FC<AddMemberModalProps> = ({ closeModal }) => {
    return (
        <div id="addMemberModal" className="fixed inset-0 z-50 active">
            {/* <!-- Improved Backdrop with more blur --> */}
            <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => closeModal(false)}></div>

            {/* <!-- Modal Content --> */}
            <div
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-auto">
                <div className="bg-white rounded-2xl shadow-xl">
                    {/* <!-- Enhanced Header with gradient background --> */}
                    <div className="p-6 sticky top-0 bg-white z-10 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Add New Team Member</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill in the information below to create a new team
                                    member</p>
                            </div>
                            <button onClick={() => closeModal(false)}
                                className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Modal Body with sections --> */}
                    <div className="p-6">
                        <form id="addMemberForm" className="space-y-8">
                            {/* <!-- Personal Information Section --> */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900 pb-2 border-b border-gray-100">Personal
                                    Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* <!-- First Name --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">First Name <span
                                            className="text-red-500">*</span></label>
                                        <input type="text" name="firstName"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>

                                    {/* <!-- Last Name --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Last Name <span
                                            className="text-red-500">*</span></label>
                                        <input type="text" name="lastName"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>

                                    {/* <!-- Email --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Email <span
                                            className="text-red-500">*</span></label>
                                        <input type="email" name="email"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>

                                    {/* <!-- Phone --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Phone Number <span
                                            className="text-red-500">*</span></label>
                                        <input type="tel" name="phone"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Account Settings Section --> */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900 pb-2 border-b border-gray-100">Account
                                    Settings</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* <!-- Password --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Password <span
                                            className="text-red-500">*</span></label>
                                        <input type="password" name="password"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required minLength={8} />
                                        <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                                    </div>

                                    {/* <!-- Confirm Password --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Confirm Password <span
                                            className="text-red-500">*</span></label>
                                        <input type="password" name="confirmPassword"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Position <span
                                            className="text-red-500">*</span></label>
                                        <input type="text" name="position"
                                            placeholder="e.g. Product Manager, Frontend Developer"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>

                                    {/* <!-- Role with enhanced select --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Role <span
                                            className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select name="role"
                                                className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow appearance-none bg-white"
                                                required>
                                                <option value="">Please select</option>
                                                <option value="admin">Admin</option>
                                                <option value="member">Member</option>
                                                <option value="manager">Manager</option>
                                                <option value="client">Client</option>
                                            </select>
                                            <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* <!-- Profile Picture with preview --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Profile Picture</label>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden"
                                                id="imagePreview">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <input type="file" name="profilePicture" accept="image/*"
                                                className="flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-brand-50 file:text-brand-500 hover:file:bg-brand-100 transition-colors" />
                                        </div>
                                    </div>

                                    {/* <!-- Date of Birth --> */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth <span
                                            className="text-red-500">*</span></label>
                                        <input type="date" name="dob"
                                            className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                            required />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Address Section --> */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900 pb-2 border-b border-gray-100">Address
                                    Information</h3>
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Address <span
                                            className="text-red-500">*</span></label>
                                        <textarea name="address" rows={2}
                                            className="w-full px-3 py-2 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow resize-none"
                                            required></textarea>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* <!-- City --> */}
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-700">City <span
                                                className="text-red-500">*</span></label>
                                            <input type="text" name="city"
                                                className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                                required />
                                        </div>

                                        {/* <!-- State --> */}
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-700">State <span
                                                className="text-red-500">*</span></label>
                                            <input type="text" name="state"
                                                className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                                required />
                                        </div>

                                        {/* <!-- Country --> */}
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-700">Country <span
                                                className="text-red-500">*</span></label>
                                            <input type="text" name="country"
                                                className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                                required />
                                        </div>

                                        {/* <!-- Zip Code --> */}
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-gray-700">Zip Code <span
                                                className="text-red-500">*</span></label>
                                            <input type="text" name="zipCode"
                                                className="w-full h-11 px-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow"
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- Enhanced Footer --> */}
                    <div className="p-6 border-t border-gray-100 sticky bottom-0 bg-white backdrop-blur-xl">
                        <div className="flex items-center justify-end gap-3">
                            <button onClick={()=>closeModal(false)}
                                className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                                Cancel
                            </button>
                            <button onClick={()=>closeModal(false)}
                                className="px-6 py-2.5 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-colors shadow-lg shadow-brand-500/25">
                                Add Member
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMemberModal;