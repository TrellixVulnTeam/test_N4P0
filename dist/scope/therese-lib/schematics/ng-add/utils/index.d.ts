import * as ts from 'typescript';
import { Rule, Tree } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
export declare const installPackageJsonDependencies: () => Rule;
export declare const getProjectFromWorkspace: (workspace: WorkspaceSchema, projectName?: string | undefined) => WorkspaceProject;
export declare const getProjectTargetOptions: (project: WorkspaceProject, buildTarget: string) => Record<string, any>;
export declare const addPackageToPackageJson: (host: Tree, pkg: string, version: string) => Tree;
export declare const addModuleImportToRootModule: (host: Tree, moduleName: string, src: string, project: WorkspaceProject) => void;
export declare const addModuleImportToModule: (host: Tree, modulePath: string, moduleName: string, src: string) => void;
export declare const getSourceFile: (host: Tree, path: string) => ts.SourceFile;
export declare const getWorkspacePath: (host: Tree) => string;
export declare const getWorkspace: (host: Tree) => any;
