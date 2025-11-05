import React, { useState } from 'react';
import { Section } from '../Section';
import { LinkIcon, CloseIcon } from '../../constants';
import type { Task, ResearchProject, MultilingualString } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { ConfirmationModal } from '../ConfirmationModal';

interface TasksPageProps {
    tasks: Task[];
    onViewProject: (id: number) => void;
    researchProjects: ResearchProject[];
    onAddTask: (taskText: MultilingualString) => void;
    onDeleteTask: (taskId: number) => void;
}

export const TasksPage: React.FC<TasksPageProps> = ({ tasks, onViewProject, researchProjects, onAddTask, onDeleteTask }) => {
    const { language } = useLanguage();
    const [newTask, setNewTask] = useState('');
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

    const handleAddTaskSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.trim() === '') return;
        
        // For simplicity, this creates a multilingual string with the same text for all languages.
        const newTaskText: MultilingualString = {
            fr: newTask,
            en: newTask,
            ar: newTask
        };
        onAddTask(newTaskText);
        setNewTask('');
    };
    
    const taskListTitle = { fr: "Liste des tâches", en: "Task List", ar: "قائمة المهام" };
    const noTasksMessage = { fr: "Toutes les tâches sont terminées !", en: "All tasks are completed!", ar: "تم إنجاز جميع المهام!" };
    
    return (
        <>
            <Section title={translations.tasks[language]}>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md text-left rtl:text-right">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{taskListTitle[language]}</h3>
                        
                        <form onSubmit={handleAddTaskSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder={translations.newTaskPlaceholder[language]}
                                className="flex-grow px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base"
                                aria-label="New task"
                            />
                            <button type="submit" className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                {translations.addTask[language]}
                            </button>
                        </form>

                        <ul className="space-y-3">
                            {tasks.map((task) => {
                                const project = task.researchProjectId ? researchProjects.find(p => p.id === task.researchProjectId) : null;
                                return (
                                    <li key={task.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-sm transition-shadow">
                                        <div className="flex flex-col items-start">
                                            <span className="text-slate-800">{task.text[language]}</span>
                                            {project && (
                                                <button onClick={() => onViewProject(project.id)} className="text-sm text-teal-600 hover:underline mt-1">
                                                    <LinkIcon /> {project.title[language]}
                                                </button>
                                            )}
                                        </div>
                                        <button 
                                            onClick={() => setTaskToDelete(task)} 
                                            className="ml-4 rtl:ml-0 rtl:mr-4 flex-shrink-0 text-slate-400 hover:text-red-600 transition-colors p-1 rounded-full"
                                            aria-label={`Delete task: ${task.text[language]}`}
                                        >
                                            <CloseIcon />
                                        </button>
                                    </li>
                                );
                            })}
                            {tasks.length === 0 && (
                                <p className="text-center text-slate-500 py-4">{noTasksMessage[language]}</p>
                            )}
                        </ul>
                    </div>
                </div>
            </Section>
            <ConfirmationModal
                isOpen={!!taskToDelete}
                onClose={() => setTaskToDelete(null)}
                onConfirm={() => {
                    if (taskToDelete) {
                        onDeleteTask(taskToDelete.id);
                        setTaskToDelete(null);
                    }
                }}
                title={translations.deleteTaskTitle[language]}
                message={translations.deleteTaskMessage[language]}
            />
        </>
    );
};