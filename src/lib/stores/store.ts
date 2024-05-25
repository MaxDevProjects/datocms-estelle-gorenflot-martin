import {writable, readable} from 'svelte/store';

export const menuList = readable([
        {
            title: "Accueil",
            slug: "/",
            enabled: false
        },
        {
            title: "Services",
            slug: "/services",
            enabled: true
        },
        {
            title: "About",
            slug: "/about",
            enabled: false
        },
        {
            title: "Testimonials",
            slug: "/testimonials",
            enabled: false
        },
        {
            title: "Blog",
            slug: "/blog",
            enabled: true
        },
        {
            title: "Contact",
            slug: "contact",
            enabled: false
        }
]);
export const isOpenNewslettersModal = writable(false);
export const isOpenMenu = writable<boolean>(false);
export const hasRessourses = readable<boolean>(false);