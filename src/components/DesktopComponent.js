import React, { useEffect, useState } from "react"
import { useStateValue } from "../context-api/StateProvider"
import DesktopIconsPanel from "./DesktopIconsPanel/DesktopIconsPanel"
import SideBar from "./Sidebar/SideBar"
import TaskBar from "./TaskBar/TaskBar"
import WindowComponent from "./Window/WindowComponent"
const DesktopComponent = () => {
    const [activeTab, setActiveTab] = useState("")

    const [
        {
            darkTheme,
            // taskbar icons
            windowsIconClicked,
            chromeIconClicked,
            microsoftedgeClicked,
            fileIconClicked,
            // desktop icons
            settingsIconClicked,
            upArrowIconClicked,
        },
        dispatch,
    ] = useStateValue()

    useEffect(() => {
        if (windowsIconClicked) {
            setActiveTab("windowsIcon")
        } else if (chromeIconClicked) {
            setActiveTab("chromeIcon")
        } else if (microsoftedgeClicked) {
            setActiveTab("microsoftedge")
        } else if (fileIconClicked) {
            setActiveTab("fileIcon")
        } else if (settingsIconClicked) {
            setActiveTab("settings")
        }
    }, [
        windowsIconClicked,
        chromeIconClicked,
        microsoftedgeClicked,
        fileIconClicked,
        settingsIconClicked,
    ])
    const showWindow = (value, clicked) => {
        // setChromeWindowVisibility(value)
        console.log(value, clicked)
        setActiveTab(clicked)
        if (
            clicked === "windowsIcon" ||
            clicked === "chromeIcon" ||
            clicked === "microsoftedge" ||
            clicked === "fileIcon"
        ) {
            dispatch({
                type: "UPDATE_TASKBAR_ACTION",
                windowsIconClicked:
                    clicked === "windowsIcon" ? value : windowsIconClicked,
                chromeIconClicked:
                    clicked === "chromeIcon" ? value : chromeIconClicked,
                microsoftedgeClicked:
                    clicked === "microsoftedge" ? value : microsoftedgeClicked,
                fileIconClicked:
                    clicked === "fileIcon" ? value : fileIconClicked,
            })
        } else {
            dispatch({
                type: "UPDATE_DESKTOP_ACTION",
                settingsIconClicked:
                    clicked === "settings" ? value : settingsIconClicked,
            })
        }
    }

    const getActiveTab = (value) => {
        console.log(value)
        setActiveTab(value)
    }

    return (
        <div
            className={`relative z-0 flex h-full ${
                darkTheme ? "bg-windows-dark" : "bg-windows-light"
            } bg-cover bg-center text-white`}
        >
            <div className="flex w-full justify-between">
                <div className="fixed max-h-[99%] max-w-[99%]">
                    {/* chrome click */}
                    {chromeIconClicked && (
                        <WindowComponent
                            showWindow={showWindow}
                            clicked="chromeIcon"
                            getActiveTab={getActiveTab}
                            activeTab={activeTab}
                        ></WindowComponent>
                    )}
                    {/* microsoft edge clicked */}
                    {microsoftedgeClicked && (
                        <WindowComponent
                            showWindow={showWindow}
                            clicked="microsoftedge"
                            getActiveTab={getActiveTab}
                            activeTab={activeTab}
                        ></WindowComponent>
                    )}
                    {/* setttings clicked */}
                    {settingsIconClicked && (
                        <WindowComponent
                            showWindow={showWindow}
                            clicked="settings"
                            getActiveTab={getActiveTab}
                            activeTab={activeTab}
                        ></WindowComponent>
                    )}
                </div>
                <div className="left-0 m-10">
                    <DesktopIconsPanel></DesktopIconsPanel>
                </div>
                <div className="right-0 w-[20%]">
                    <SideBar show={upArrowIconClicked}></SideBar>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full">
                <TaskBar></TaskBar>
            </div>
        </div>
    )
}

export default DesktopComponent
