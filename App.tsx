import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task, Theme, Filter } from './types';
import { loadTasks, saveTasks, loadTheme, saveTheme, loadFilter, saveFilter } from './utils/storage';
import ThemeSelector from './components/ThemeSelector';
import AddTaskForm from './components/AddTaskForm';
import FilterButtons from './components/FilterButtons';
import TaskItem from './components/TaskItem';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<Theme>('light');
  const [filter, setFilter] = useState<Filter>('all');
  const [editingTask, setEditingTask] = useState<string | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    setTasks(loadTasks());
    setTheme(loadTheme());
    setFilter(loadFilter());
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveFilter(filter);
  }, [filter]);

  // Apply theme to body
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const addTask = (title: string, dueDate?: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      dueDate,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
        : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, title: string, dueDate?: string) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, title, dueDate, updatedAt: new Date().toISOString() }
        : task
    ));
    setEditingTask(null);
  };

  const startEdit = (id: string) => {
    setEditingTask(id);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'incomplete':
        return !task.completed;
      default:
        return true;
    }
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          minHeight: '100vh'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '800',
              marginBottom: '8px',
              background: 'linear-gradient(135deg, var(--primary), #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ✨ Todo App
          </h1>
          <p
            style={{
              fontSize: '18px',
              opacity: 0.7,
              marginBottom: '20px'
            }}
          >
            Get things done with style!
          </p>
        </motion.div>

        <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />

        <Dashboard />

        <AddTaskForm onAddTask={addTask} />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '14px',
            opacity: 0.7
          }}
        >
          {totalCount > 0 && (
            <span>
              {completedCount} of {totalCount} tasks completed
              {completedCount === totalCount && totalCount > 0 && ' 🎉'}
            </span>
          )}
        </motion.div>

        <AnimatePresence>
          {filteredTasks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                color: 'var(--text)',
                opacity: 0.7
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                {filter === 'completed' ? '🎉' : filter === 'incomplete' ? '📝' : '✨'}
              </div>
              <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                {filter === 'completed' 
                  ? 'No completed tasks yet'
                  : filter === 'incomplete'
                  ? 'No incomplete tasks'
                  : 'No tasks yet'
                }
              </div>
              <div style={{ fontSize: '14px' }}>
                {filter === 'all' 
                  ? 'Add your first task to get started!'
                  : 'Try switching to a different filter'
                }
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginBottom: '40px' }}
            >
              {filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  onEdit={editTask}
                  isEditing={editingTask === task.id}
                  onStartEdit={startEdit}
                  onCancelEdit={cancelEdit}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '12px',
            opacity: 0.5,
            borderTop: '1px solid var(--border)',
            marginTop: '40px'
          }}
        >
          <p>Built with ❤️ using React, TypeScript, and Framer Motion</p>
          <p>PWA Ready - Install this app on your device!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default App; 