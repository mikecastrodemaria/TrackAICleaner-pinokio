{
  "run": [
    {
      "method": "fs.rm",
      "params": {
        "path": "env"
      }
    },
    {
      "method": "fs.rm",
      "params": {
        "path": "app"
      }
    },
    {
      "method": "notify",
      "params": {
        "html": "Environment and app folder removed. Click <b>Install</b> to reinstall."
      }
    }
  ]
}
