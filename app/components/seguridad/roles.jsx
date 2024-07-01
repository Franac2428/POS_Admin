import { useState } from 'react';
import RoleLista from "./roleList";
import AddRole from '@/app/components/seguridad/addRol';
import UpdateRole from '@/app/components/seguridad/updateRol';

export default function RoleTable() {
    const [addRoleModalOpen, setAddRoleModalOpen] = useState(false);
    const [updateRoleModalOpen, setUpdateRoleModalOpen] = useState(false);
    const [roles, setRoles] = useState([]); // Estado para almacenar los roles
    const [selectedRole, setSelectedRole] = useState(null); // Estado para almacenar el rol seleccionado para editar

    const handleMutateRoles = (newRole) => {
        setRoles([...roles, newRole]); // Agregar el nuevo rol al estado de roles
        setAddRoleModalOpen(false); // Cerrar el modal de agregar rol después de añadirlo
    };

    const handleEditRole = (role) => {
        setSelectedRole(role);
        setUpdateRoleModalOpen(true);
    };

    const handleUpdateRole = (updatedRole) => {
        // Actualizar el rol en la lista de roles
        const updatedRoles = roles.map(role => role.IdRole === updatedRole.IdRole ? updatedRole : role);
        setRoles(updatedRoles);
        setUpdateRoleModalOpen(false);
    };

    return (
        <div className="overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 divide-y dark:divide-gray-700">
                <div className="flex flex-col py-3 space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-4">
                        <h5>
                            <span className="text-gray-500">All Roles: </span>
                            <span className="dark:text-white">{roles.length}</span>
                        </h5>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        onClick={() => setAddRoleModalOpen(true)}
                    >
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Agregar
                    </button>
                </div>
                <AddRole open={addRoleModalOpen} onClose={() => setAddRoleModalOpen(false)} mutate={handleMutateRoles} />
                <UpdateRole open={updateRoleModalOpen} onClose={() => setUpdateRoleModalOpen(false)} role={selectedRole} onUpdate={handleUpdateRole} />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-2">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all"
                                        type="checkbox"
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-4 py-3">Role</th>
                            <th scope="col" className="px-4 py-3">Descripcion</th>
                            <th scope="col" className="px-4 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RoleLista roles={roles} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}
