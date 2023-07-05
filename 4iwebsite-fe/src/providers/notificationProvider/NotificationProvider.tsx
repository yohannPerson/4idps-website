import React, { createContext, ReactNode, useState } from 'react';

import './NotificationProvider.scss';


interface Notification {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  status: 'active' | 'inactive';
}

interface NotificationContextValue {
  notifications: Notification[];
  displayNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (index: number) => void;
}

interface SystemAlertProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextValue>({
  notifications: [],
  displayNotification: () => {},
  removeNotification: () => {}
});

const NotificationProvider: React.FC<SystemAlertProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const displayNotification = (message: string, type: Notification['type']) => {
    const notification: Notification = { message, type, status: 'active' };
    const actualLenght = notifications.length;
    setNotifications((prevNotifications) => {
      const newIndex = prevNotifications.length;
      const newNotifications:Notification[] = [...prevNotifications, notification];
      setTimeout(() => {
        removeNotification(newIndex);
      }, 1000);
      return newNotifications;
    })
  };

  const removeNotification = (index: number) => {
    
    setNotifications((prevNotifications) => {
      const updateNotifications: Notification[] = prevNotifications.map((notification,i) => {
        if (i === index) {
          return {...notification,status:'inactive'};
        }
        return notification;
      });

      return updateNotifications;
    });

    setTimeout(() => {
      setNotifications((prevNotifications) => {
        const newNotification = [...prevNotifications];
        newNotification.splice(index, 1);
        return newNotification;
      });
    }, 500);
  };

  return (
    <NotificationContext.Provider value={{ notifications, displayNotification, removeNotification }}>
      {children}
      <div className='notifications-container'>
        {notifications.map((notification, index) => (
          <div key={index} className={`notification notification-${notification.type} ${notification.status}`} role="alert">
            {notification.message}
            <button className='notification-btn' onClick={() => {removeNotification(index)}}>
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
