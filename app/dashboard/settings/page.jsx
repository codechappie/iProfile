"use client";
import React from 'react'
import AppContainer from '../../../components/AppContainer'
import { Input, Textarea } from "@nextui-org/react";
import style from './settings.module.scss'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

const Settings = () => {
    return (
        <AppContainer>


            <div className={style.settingsContainer}>

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Input
                    type="text"
                    label="Username"
                    // defaultValue={}
                    disabled
                    description="We'll never share your email with anyone else."
                    className="max-w-xs"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">@</span>
                        </div>
                    }
                />
                <Input
                    type="text"
                    label="Username"
                    placeholder="codechappie"
                    description="We'll never share your email with anyone else."
                    className="max-w-xs"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">@</span>
                        </div>
                    }
                />
                <Textarea
                    label="Description"
                    placeholder="Enter your description (Default autosize)"
                />
            </div>

        </AppContainer>
    )
}

export default Settings