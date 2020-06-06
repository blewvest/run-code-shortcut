// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const runCode = vscode.commands.registerCommand('extension.runCode', () => {
		vscode.commands.executeCommand('code-runner.run');
	});
	const stopCode = vscode.commands.registerCommand('extension.stopCode', () => {
		vscode.commands.executeCommand('code-runner.stop');
	});
	context.subscriptions.push(runCode, stopCode);
}

// this method is called when your extension is deactivated
export function deactivate() {}
