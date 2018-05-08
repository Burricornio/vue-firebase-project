<template>
    <div>
        <admin-users-dialog />

        <v-data-table
            :headers="headers"
            :items="users"
            :loading="loading"
            class="elevation-1"
            :no-data-text="$t('admin.usersTable.empty')"
        >
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">{{ props.item.uid }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
                <td class="text-xs-right">{{ props.item.username }}</td>

                <td class="justify-center" layout px-0>
                    <v-btn icon class="mx-0" @click="editUser(props.item)">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-0" @click="removeUser(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import AdminUsersDialog from '@/components/administration/AdminUsersDialog'

export default {
  name: 'admin-users',
  data () {
      return {
          headers: [
              {text: this.$t('admin.usersTable.uid'), value: 'uid', align: 'center'},
              {text: this.$t('admin.usersTable.email'), value: 'email', align: 'center'},
              {text: this.$t('admin.usersTable.username'), value: 'username', align: 'center'},
              {text: this.$t('common.actions'), value: 'name', align: 'center', sortable: false},
          ],
          users: [],
          loading: false
      }
  },
  components: {
      AdminUsersDialog
  },
  methods: {
      editUser (user) {

      },
      removeUser (user) {
          
      }
  }
}
</script>
