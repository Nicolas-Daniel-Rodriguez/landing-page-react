import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-primary">REACT.</h1>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sit quia aspernatur libero impedit excepturi fugiat nesciunt eaque quo consequuntur. Similique nobis error explicabo unde earum voluptates quos sit voluptatum.</p>
                <div className="flex justify-between md:w-[75% my-6]">
                    <FaFacebookSquare size={30} className="hover:scale-125 duration-300"/>
                    <FaInstagram size={30} className="hover:scale-125 duration-300"/>
                    <FaTwitterSquare size={30} className="hover:scale-125 duration-300"/>
                    <FaGithubSquare size={30} className="hover:scale-125 duration-300"/>
                    <FaDribbbleSquare size={30} className="hover:scale-125 duration-300"/>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-primary">Analytics</li>
                        <li className="py-2 text-sm hover:text-primary">Marketing</li>
                        <li className="py-2 text-sm hover:text-primary">Commerce</li>
                        <li className="py-2 text-sm hover:text-primary">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Sopport</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-primary">Pricing</li>
                        <li className="py-2 text-sm hover:text-primary">Documentation</li>
                        <li className="py-2 text-sm hover:text-primary">Guides</li>
                        <li className="py-2 text-sm hover:text-primary">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-primary">About</li>
                        <li className="py-2 text-sm hover:text-primary">Blog</li>
                        <li className="py-2 text-sm hover:text-primary">Jobs</li>
                        <li className="py-2 text-sm hover:text-primary">Press</li>
                        <li className="py-2 text-sm hover:text-primary">Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-primary">Claim</li>
                        <li className="py-2 text-sm hover:text-primary">Policy</li>
                        <li className="py-2 text-sm hover:text-primary">Terms</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer