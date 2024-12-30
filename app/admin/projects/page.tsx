"use client"
import OBMCard from "@/components/card/DetailCard/obmCard";
import SMMCard from "@/components/card/DetailCard/smmCard";
import VACard from "@/components/card/DetailCard/vaCard";
import WDSCard from "@/components/card/DetailCard/wdsCard";
import SimpleCard from "@/components/card/simpleCard";
import Filterbar from "@/components/Filterbar";
import ProjectCreateModal from "@/components/modal/projectCreateModal";
import ProjectDetailModal, { ProjectData } from "@/components/modal/projectDetailsModal";
import { useState } from "react";

export default function Projects() {
    const [index, setIndex] = useState(0);

    const [detailData, setDetailData] = useState<ProjectData | null>(null);

    const [createModal, setCreateModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);

    const openNewProjectModal = () => {
        setCreateModal(true);
    }

    const closeNewProjectModal = () => {
        setCreateModal(false);
    }

    const openProjectDetails = (i: number, d: ProjectData) => {
        setDetailData(d);
       
        setDetailModal(true);
    }

    const handleFilter = (index: number) => {
        console.log(index);
        setIndex(index);
    }

    return (
        <div className="pt-20 pl-64 pr-6 min-h-screen w-screen overflow-x-hidden">
            {/* <!-- Page Header --> */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage your hourly and fixed-price projects</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="px-4 py-2 text-sm font-medium text-brand-500 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors">
                            Import Projects
                        </button>
                        <button
                            onClick={openNewProjectModal}
                            className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            New Project
                        </button>
                    </div>
                </div>

                {/* <!-- Package Type Stats --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* <!-- Hourly Packages Stats --> */}
                    <SimpleCard type={0} title="VA Packages" maxVal={600} usedVal={432} count={24} completion={0} />
                    <SimpleCard type={0} title="OBM Packages" maxVal={400} usedVal={280} count={16} completion={0} />
                    <SimpleCard type={1} title="SMM Packages" maxVal={600} usedVal={432} count={18} completion={85} />
                    <SimpleCard type={1} title="WDS Packages" maxVal={600} usedVal={432} count={12} completion={60} />

                </div>

                {/* <!-- Filters Bar --> */}
                <Filterbar filterEvent={handleFilter} />

                {/* <!-- Projects Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        index == 0 ? (
                            <>
                                <VACard onClick={openProjectDetails} />
                                <OBMCard onClick={openProjectDetails} />
                                <SMMCard onClick={openProjectDetails} />
                                <WDSCard onClick={openProjectDetails} />
                            </>
                        ) : index == 1 ? (
                            <>
                                <VACard onClick={openProjectDetails} />
                                <OBMCard onClick={openProjectDetails} />
                            </>
                        ) : (
                            <>
                                <SMMCard onClick={openProjectDetails} />
                                <WDSCard onClick={openProjectDetails} />
                            </>
                        )
                    }


                </div>
            </div>
            {
                createModal ? (
                    <>
                        <ProjectCreateModal closeEvent={closeNewProjectModal} />
                        <div id="modalOverlay" className="active modal-overlay fixed w-screen h-screen inset-0 bg-black/50 backdrop-blur-sm z-50"
                            onClick={closeNewProjectModal}></div>
                    </>
                ) : (
                    <></>
                )
            }
            {
                detailModal ? (
                    <>
                        <div id="projectDetailsOverlay" className="active modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setDetailModal(false)}></div>
                        <ProjectDetailModal onClose={() => setDetailModal(false)} data={detailData} />
                    </>
                ) : (
                    <>
                    </>
                )
            }

        </div>
    );


}