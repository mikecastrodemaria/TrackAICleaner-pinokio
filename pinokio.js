module.exports = {
  version: "3.5",
  title: "TrackAICleaner",
  description: "Pre-mastering & audio enhancement for AI-generated music. 12-stage processing chain with platform presets (Suno, Udio), before/after spectrogram, and broadcast-ready LUFS normalization.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-download",
        text: "Installing",
        href: "install.js"
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url
          }, {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js"
          }]
        } else {
          return [{
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js"
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Updating",
          href: "update.js"
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Resetting",
          href: "reset.js"
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-play",
          text: "Start",
          href: "start.js",
          description: "Launch TrackAICleaner UI"
        }, {
          icon: "fa-solid fa-arrows-rotate",
          text: "Update",
          href: "update.js",
          description: "Pull latest version and update dependencies"
        }, {
          icon: "fa-solid fa-download",
          text: "Install",
          href: "install.js",
          description: "Download TrackAICleaner and install dependencies"
        }, {
          icon: "fa-solid fa-rotate-left",
          text: "Reset",
          href: "reset.js",
          description: "Reset virtual environment for a clean reinstall",
          confirm: "Are you sure you wish to reset the app?"
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-download",
        text: "Install",
        href: "install.js",
        description: "Download TrackAICleaner and install dependencies"
      }]
    }
  }
}
