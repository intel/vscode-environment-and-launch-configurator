/**
 * Copyright (c) Intel Corporation
 * Licensed under the MIT License. See the project root LICENSE
 * 
 * SPDX-License-Identifier: MIT
 */

'use strict';
import * as vscode from 'vscode';
import { DevFlow } from './devFlow';

export function activate(context: vscode.ExtensionContext) {
	let devFlof = new DevFlow(context);
	context.subscriptions.push(vscode.commands.registerCommand('intel.oneAPIСonfigurator.generateLaunchJson', () => devFlof.launchConfigurator.makeLaunchFile()));
	context.subscriptions.push(vscode.commands.registerCommand('intel.oneAPIСonfigurator.generateTaskJson', () => devFlof.launchConfigurator.makeTasksFile()));
	context.subscriptions.push(vscode.commands.registerCommand('intel.oneAPIСonfigurator.setONEAPIenvironment', () => devFlof.environment.setOneApiEnv()));
	context.subscriptions.push(vscode.commands.registerCommand('intel.oneAPIСonfigurator.clearEnvironment', () => devFlof.environment.unsetOneApiEnv()));
}

export function deactivate() {
	console.log("Environment and Launch Configurator for Intel oneAPI Toolkits (preview): Goodbye");
}
