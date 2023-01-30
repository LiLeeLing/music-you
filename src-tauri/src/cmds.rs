type CmdResult<T = ()> = Result<T, String>;

use tauri::Manager;
use crate::{
    utils::{help},
};
use crate::{ret_err, wrap_err};

#[tauri::command]
pub async fn close_splashscreen(window: tauri::Window) {
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
pub fn minimized(window: tauri::Window) {
    window.get_window("main").unwrap().minimize().unwrap()
}


// /// restart the sidecar
// #[tauri::command]
// pub async fn restart_sidecar() -> CmdResult {
//     wrap_err!(CoreManager::global().run_core().await)
// }
//
#[tauri::command]
pub fn open_web_url(url: String) -> CmdResult<()> {
    wrap_err!(open::that(url))
}