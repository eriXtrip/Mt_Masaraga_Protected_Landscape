import { useSyncExternalStore } from 'react';
import { MOCK_TRANSACTIONS, MOCK_USERS } from '../mockData';

const STORAGE_KEY = 'masaraga_hiker_store_v1';
const HIKER = MOCK_USERS.find((user) => user.role === 3) || {};

function createSeed() {
    return {
        profile: {
            name: HIKER.name || '',
            email: HIKER.email || '',
            mobile: '',
            emergencyContact: {
                name: '',
                relation: '',
                mobile: '',
            },
        },
        transactions: MOCK_TRANSACTIONS,
    };
}

function load() {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.transactions)) {
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

export function cancelBooking(transactionId) {
    setState((current) => ({
        ...current,
        transactions: current.transactions.map((txn) =>
            txn.transactionId === transactionId
                ? {
                      ...txn,
                      status: 'Cancelled',
                      passesData: txn.passesData.map((pass) => ({ ...pass, status: 'Cancelled' })),
                  }
                : txn
        ),
    }));
}

export function rescheduleBooking(transactionId, hikeDate) {
    setState((current) => ({
        ...current,
        transactions: current.transactions.map((txn) =>
            txn.transactionId === transactionId ? { ...txn, hikeDate } : txn
        ),
    }));
}

export function updateProfile(profile) {
    setState((current) => ({ ...current, profile: { ...current.profile, ...profile } }));
}

export function useHikerStore() {
    return useSyncExternalStore(subscribe, getState);
}