import { ref, onMounted } from 'vue';

const notifications = ref([]);
const unreadCount = ref(0);

export const useNotifications = () => {
  const addNotification = (notification) => {
    const id = Date.now() + Math.random();
    notifications.value.unshift({
      id,
      timestamp: new Date(),
      read: false,
      ...notification,
    });
    unreadCount.value++;
    // Keep max 50
    if (notifications.value.length > 50) {
      notifications.value = notifications.value.slice(0, 50);
    }
  };

  const markAsRead = (id) => {
    const notif = notifications.value.find((n) => n.id === id);
    if (notif && !notif.read) {
      notif.read = true;
      unreadCount.value = Math.max(0, unreadCount.value - 1);
    }
  };

  const markAllAsRead = () => {
    notifications.value.forEach((n) => (n.read = true));
    unreadCount.value = 0;
  };

  const clearAll = () => {
    notifications.value = [];
    unreadCount.value = 0;
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return minutes + "m ago";
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + "h ago";
    const days = Math.floor(hours / 24);
    return days + "d ago";
  };

  return { notifications, unreadCount, addNotification, markAsRead, markAllAsRead, clearAll, timeAgo };
};
