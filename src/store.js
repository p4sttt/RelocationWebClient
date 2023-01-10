import create from "zustand";
import { devtools } from "zustand/middleware";

export const useAuth = create(
  devtools((set, get) => ({
    token: null,
    signin: (token) => set({ token: token }),
    singout: () => set({ token: null }),
  }))
);

export const useSettings = create(
  devtools((set, get) => ({
    settings: {
      temperature: null,
      tags: [],
      countries: [],
    },
    setTemperature: (temp) => {
      set({
        settings: {
          temperature: temp,
          tags: get().settings.tags,
          countries: get().settings.countries,
        },
      });
    },
    setTags: (tags) => {
      set({
        settings: {
          temperature: get().settings.temperature,
          tags: tags,
          countries: get().settings.countries,
        },
      });
    },
    setCountries: (countries) => {
      set({
        settings: {
          temperature: get().settings.temperature,
          tags: get().settings.tags,
          countries: countries,
        },
      });
    },
    setSettings: (settings) => {
      set({ settings: settings });
    },
    unsetSettings: () => {
      set({
        settings: {
          temperature: null,
          tags: null,
          countries: null,
        },
      });
    },
  }))
);

export const useDashboard = create(
  devtools((set, get) => ({
    news: null,
    countries: null,
    user: null,
    setNews: (news) => set({ news: news }),
    setCountries: (countries) => set({ countries: countries }),
    setUser: (user) => set({ user: user }),
    unsetDashboard: () => set({ news: null, countries: null }),
  }))
);
