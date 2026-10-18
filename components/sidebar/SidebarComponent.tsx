'use client'
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { HiOutlineMenu } from 'react-icons/hi';

export default function SidebarComponent() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card lg:hidden">
            <div className="flex gap-2 justify-content-center">
                <Button onClick={() => setVisibleRight(true)}>
                    <HiOutlineMenu />
                </Button>
            </div>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='bg-azul-escuro text-white p-4'>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
    )
}
        