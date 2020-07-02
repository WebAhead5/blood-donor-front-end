import { atom } from "recoil";

export const personalSettings = atom ({
    key: 'personalSettings',
    default: {
        name: '',
        bloodType: '',
        donationCount: 10,
        reminderCount: 2,
        mostRecentDonation: ''
    }
})