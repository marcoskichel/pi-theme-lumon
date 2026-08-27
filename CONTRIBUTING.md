# Contributing

`pi --theme themes/lumon.json --use-theme lumon` runs pi with this checkout's theme for one session without touching `~/.pi/agent/settings.json`. Pi hot-reloads the active theme file, so edits show up immediately.

Releases run through release-please on `master`. The publish job needs the `RELEASE_APP_ID` and `RELEASE_APP_PRIVATE_KEY` repository secrets, a `release` environment, and npm trusted publishing for `pi-theme-lumon`.
