"use client"

import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumeSection({ theme }: { theme: "retro" | "sunset" }) {
    const headingClasses =
        theme === "retro"
            ? "text-green-400 font-mono"
            : "text-orange-400 font-sans"

    const accentBorder = theme === "retro" ? "border-green-500" : "border-orange-500"
    const accentText = theme === "retro" ? "text-green-400" : "text-orange-400"
    const accentBg =
        theme === "retro"
            ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
            : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"

    const buttonClasses =
        theme === "retro"
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-orange-500 text-white hover:bg-orange-600"

    const resumePreviewUrl =
        "https://drive.google.com/file/d/1Q6KKbQyX26FT6VJDRCPqmKP73IS_NKcE/preview"
    const resumeDownloadUrl =
        "https://drive.google.com/uc?export=download&id=1Q6KKbQyX26FT6VJDRCPqmKP73IS_NKcE"

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${headingClasses}`}
            >
                Resume
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl mx-auto text-center text-sm sm:text-base text-gray-300 mb-10"
            >
                View my latest resume directly here or download a copy to keep handy.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
                <Card
                    className={`${accentBg} ${accentBorder} border rounded-2xl shadow-xl overflow-hidden`}
                >
                    <CardHeader className="flex flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div
                                className={`p-2 rounded-full border ${accentBorder} bg-black/40 flex items-center justify-center`}
                            >
                                <FileText className={`w-5 h-5 ${accentText}`} />
                            </div>
                            <div>
                                <CardTitle className={`text-base sm:text-lg ${accentText}`}>
                                    Priyanshu Kumar · Resume
                                </CardTitle>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    PDF hosted on Google Drive
                                </p>
                            </div>
                        </div>

                        <Button
                            asChild
                            size="sm"
                            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium flex items-center gap-2 ${buttonClasses}`}
                        >
                            <a href={resumeDownloadUrl} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4" />
                                Download
                            </a>
                        </Button>
                    </CardHeader>

                    <CardContent className="p-0">
                        <div className="aspect-[3/4] sm:aspect-[4/3] w-full bg-black flex items-center justify-center">
                            <iframe
                                src={resumePreviewUrl}
                                title="Priyanshu Kumar Resume"
                                className="w-full h-full border-0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}
