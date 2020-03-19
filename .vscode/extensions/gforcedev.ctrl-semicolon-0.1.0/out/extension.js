'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let insertSemiColonCommand = vscode.commands.registerCommand('extension.insertSemiColon', () => {
        // The code you place here will be executed every time your command is executed
        // current editor
        const editor = vscode.window.activeTextEditor;
        // check if there is no selection
        if (editor.selection.isEmpty) {
            // the Position object gives you the line and character where the cursor is
            const position = editor.selection.active;
            let line = editor.document.lineAt(position.line);
            let text = line.text;
            if (text.charAt(text.length - 1) != ';') {
                const edit = new vscode.WorkspaceEdit();
                edit.insert(editor.document.uri, line.range.end, ';');
                return vscode.workspace.applyEdit(edit);
            }
        }
    });
    let removeSemiColonCommand = vscode.commands.registerCommand('extension.removeSemiColon', () => {
        // The code you place here will be executed every time your command is executed
        // current editor
        const editor = vscode.window.activeTextEditor;
        // check if there is no selection
        if (editor.selection.isEmpty) {
            // the Position object gives you the line and character where the cursor is
            const position = editor.selection.active;
            let line = editor.document.lineAt(position.line);
            let text = line.text;
            if (text.charAt(text.length - 1) == ';') {
                let range = new vscode.Range(line.lineNumber, text.length - 1, line.lineNumber, text.length);
                const edit = new vscode.WorkspaceEdit();
                edit.delete(editor.document.uri, range);
                return vscode.workspace.applyEdit(edit);
            }
        }
    });
    context.subscriptions.push(insertSemiColonCommand);
    context.subscriptions.push(removeSemiColonCommand);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map