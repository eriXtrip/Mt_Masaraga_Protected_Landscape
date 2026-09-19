import { useSyncExternalStore } from 'react';
import { ADMIN_BOOKINGS, ADMIN_DAILY_QUOTA, ADMIN_SCHEDULES, ADMIN_USERS } from '../mockData';

const STORAGE_KEY = 'masaraga_admin_store_v1';
const ADMIN = ADMIN_USERS.find((user) => user.role === 1) || ADMIN_USERS[0] || {};

function createSeed() {
    return {
        profile: {
            name: ADMIN.name || '',
            email: ADMIN.email || '',
            role: ADMIN.role ?? 1,
            subtitle: ADMIN.subtitle || '',
        },
        bookings: ADMIN_BOOKINGS,
        quota: ADMIN_DAILY_QUOTA,
        schedules: ADMIN_SCHEDULES,
        users: ADMIN_USERS,
    };
}

function load() {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.bookings)) {
                return parsed;
            }
        }
    } catch (error) {
        // Fall through to seed data when storage is unavailable.
    }
    return createSeed();
}

let state = load();

const listeners = new Set();

function persist() {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        // Keep in-memory state even when storage is unavailable.
    }
}

function setState(updater) {
    state = updater(state);
    persist();
    listeners.forEach((listener) => listener());
}

function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getState() {
    return state;
}

export function updateBookingStatus(bookingId, status) {
    setState((current) => ({
        ...current,
        bookings: current.bookings.map((booking) =>
            booking.id === bookingId ? { ...booking, status } : booking
        ),
    }));
}

export function cancelBooking(bookingId) {
    updateBookingStatus(bookingId, 'Cancelled');
}

export function rescheduleBooking(bookingId, date) {
    setState((current) => ({
        ...current,
        bookings: current.bookings.map((booking) =>
            booking.id === bookingId ? { ...booking, date } : booking
        ),
    }));
}

export function refundBooking(bookingId) {
    updateBookingStatus(bookingId, 'Refunded');
}

export function createSchedule(schedule) {
    setState((current) => ({
        ...current,
        schedules: [
            ...current.schedules,
            { booked: 0, status: 'Available', ...schedule },
        ],
    }));
}

export function useAdminStore() {
    return useSyncExternalStore(subscribe, getState);
}