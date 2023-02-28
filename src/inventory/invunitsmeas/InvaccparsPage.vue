<template>
<q-page class="q-pa-md q-gutter-sm">
<div>
<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
<div>
<q-space />
<q-table dense :rows-per-page-options="[10, 15, 20, 25, 50, 0]" v-model:pagination="pagination" title="Invaccpar" :rows="dataInvaccpars" :filter="filter" :columns="columns" row-key="name" >
<template v-slot:top-left>
<q-btn unelevated rounded icon="add" color="primary" @click="creating" label="Agregar"/>
<q-space />
</template>
<template v-slot:top-right>
<q-input dense debounce="300" v-model="filter" placeholder="Buscar">
<template v-slot:append>
<q-icon name="search" />
</template>
</q-input>
</template>
<template v-slot:body="props">
<q-tr :props="props">
<q-td key="code" :props="props">
{{ props.row.code }}
</q-td>
<q-td key="description" :props="props">
{{ props.row.description }}
</q-td>
<q-td key="idledaccinc" :props="props">
{{ props.row.idledaccinc }}
</q-td>
<q-td key="idinvledacc" :props="props">
{{ props.row.idinvledacc }}
</q-td>
<q-td key="idexpledacc" :props="props">
{{ props.row.idexpledacc }}
</q-td>
<q-td key="idaccaccwitsoupurdec" :props="props">
{{ props.row.idaccaccwitsoupurdec }}
</q-td>
<q-td key="idaccaccwitsounonrep" :props="props">
{{ props.row.idaccaccwitsounonrep }}
</q-td>
<q-td key="idcoscen" :props="props">
{{ props.row.idcoscen }}
</q-td>
<q-td key="iddecwitcon" :props="props">
{{ props.row.iddecwitcon }}
</q-td>
<q-td key="idnonfilwitcon" :props="props">
{{ props.row.idnonfilwitcon }}
</q-td>
<q-td key="idledaccentrremdeb" :props="props">
{{ props.row.idledaccentrremdeb }}
</q-td>
<q-td key="identremcredelacc" :props="props">
{{ props.row.identremcredelacc }}
</q-td>
<q-td key="idledaccdeboutrem" :props="props">
{{ props.row.idledaccdeboutrem }}
</q-td>
<q-td key="idoutremcreledacc" :props="props">
{{ props.row.idoutremcreledacc }}
</q-td>
<!--The next column is ENUM, please complete the code necessary
<q-td key="status" :props="props">
{{ props.row.status }}</q-td>-->
<q-td key="edit" :props="props">
<q-btn round size="xs" color="primary" icon="border_color" v-on:click="editing(props.row)" />
</q-td>
<q-td key="delete" :props="props">
<q-btn round size="xs" color="negative" icon="delete_forever" v-on:click="onDelete(props.row)" />
</q-td>
</q-tr>
</template>
</q-table>
</div>
</transition>
<q-inner-loading :showing="visible">
<q-spinner-pie color="primary" size="70px"/>
</q-inner-loading>
</div>
<q-dialog v-model="dialog" persistent>
<q-card style="width: 700px; max-width: 80vw;">
<q-linear-progress :value="10" color="blue" />
<q-card-section class="row items-center">
<div class="text-h6"> </div>
<q-space />
<q-btn icon="close" flat round dense v-close-popup />
</q-card-section>
<q-banner class="bg-grey-3">
<template v-slot:avatar>
<q-icon name="warning" color="warning" />
</template>
Los campos marcados con (*) son obligatorios
</q-banner>
<q-card-section>
<q-form ref="myForm" @submit.prevent="">
<div class="row justify-around">
<div class="col-md-4">
<q-input
white
color="blue"
v-model="code"
label="code *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="description"
label="description *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idledaccinc"
label="idledaccinc *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idinvledacc"
label="idinvledacc *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idexpledacc"
label="idexpledacc *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idaccaccwitsoupurdec"
label="idaccaccwitsoupurdec *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idaccaccwitsounonrep"
label="idaccaccwitsounonrep *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idcoscen"
label="idcoscen *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="iddecwitcon"
label="iddecwitcon *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idnonfilwitcon"
label="idnonfilwitcon *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idledaccentrremdeb"
label="idledaccentrremdeb *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="identremcredelacc"
label="identremcredelacc *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idledaccdeboutrem"
label="idledaccdeboutrem *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<div class="col-md-4">
<q-input
white
color="blue"
v-model="idoutremcreledacc"
label="idoutremcreledacc *"
lazy-rules
:rules="[ val => !!val || 'El campo es obligatorio']"
/>
</div>
<!--The next column is ENUM, please complete the code necessary
//<div class="col-md-4">
//<q-input
//white
//color="blue"
//v-model="status"
//label="status *"
//lazy-rules
//:rules="[ val => !!val || 'El campo es obligatorio']"
///>
//</div>-->
</div>
</q-form>
</q-card-section>
<div class="row justify-between">
<q-card-actions align="left" class="bg-white text-teal">
</q-card-actions>
<q-card-actions align="right" class="bg-white text-teal">
<div v-if="!isEditing">
<q-btn round icon="save" @click.prevent="onSubmit" color="primary"/>
<q-tooltip>Guardar datos</q-tooltip>
</div>
<div v-else>
<q-btn round icon="save" @click.prevent="onEditing" color="primary"/>
<q-tooltip>Editar datos</q-tooltip>
</div> &nbsp;
<div>
<q-btn round icon="cancel" v-close-popup color="negative"/>
<q-tooltip>Cancelar</q-tooltip>
</div>
</q-card-actions>
</div>
</q-card>
</q-dialog>
</q-page>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
export default defineComponent({
  name: 'InvaccparsPage',
  setup () {
    const path = '/invaccpars'
    const dialog = ref(false)
    const visible = ref(false)
    const id = ref(null)
    const filter = ref(null)
    const dataInvaccpars = ref([])
    const code = ref(null)
    const description = ref(null)
    const idledaccinc = ref(null)
    const idinvledacc = ref(null)
    const idexpledacc = ref(null)
    const idaccaccwitsoupurdec = ref(null)
    const idaccaccwitsounonrep = ref(null)
    const idcoscen = ref(null)
    const iddecwitcon = ref(null)
    const idnonfilwitcon = ref(null)
    const idledaccentrremdeb = ref(null)
    const identremcredelacc = ref(null)
    const idledaccdeboutrem = ref(null)
    const idoutremcreledacc = ref(null)
    const role = ref(null)
    const active = ref(false)
    const myForm = ref(null)
    const $q = useQuasar()
    const pagination = ref({
      page: 1,
      rowsPerPage: 10
    })
    const isEditing = ref(false)
    const columns = ref([
      { name: 'code', align: 'center', label: 'code', field: 'code', sortable: true },
      { name: 'description', align: 'center', label: 'description', field: 'description', sortable: true },
      { name: 'idledaccinc', align: 'center', label: 'idledaccinc', field: 'idledaccinc', sortable: true },
      { name: 'idinvledacc', align: 'center', label: 'idinvledacc', field: 'idinvledacc', sortable: true },
      { name: 'idexpledacc', align: 'center', label: 'idexpledacc', field: 'idexpledacc', sortable: true },
      { name: 'idaccaccwitsoupurdec', align: 'center', label: 'idaccaccwitsoupurdec', field: 'idaccaccwitsoupurdec', sortable: true },
      { name: 'idaccaccwitsounonrep', align: 'center', label: 'idaccaccwitsounonrep', field: 'idaccaccwitsounonrep', sortable: true },
      { name: 'idcoscen', align: 'center', label: 'idcoscen', field: 'idcoscen', sortable: true },
      { name: 'iddecwitcon', align: 'center', label: 'iddecwitcon', field: 'iddecwitcon', sortable: true },
      { name: 'idnonfilwitcon', align: 'center', label: 'idnonfilwitcon', field: 'idnonfilwitcon', sortable: true },
      { name: 'idledaccentrremdeb', align: 'center', label: 'idledaccentrremdeb', field: 'idledaccentrremdeb', sortable: true },
      { name: 'identremcredelacc', align: 'center', label: 'identremcredelacc', field: 'identremcredelacc', sortable: true },
      { name: 'idledaccdeboutrem', align: 'center', label: 'idledaccdeboutrem', field: 'idledaccdeboutrem', sortable: true },
      { name: 'idoutremcreledacc', align: 'center', label: 'idoutremcreledacc', field: 'idoutremcreledacc', sortable: true },
      { name: 'status', align: 'center', label: 'status', field: 'status', sortable: true },
      { name: 'edit', align: 'center', label: 'Editar', field: 'edit', sortable: true },
      { name: 'delete', align: 'center', label: 'Eliminar', field: 'delete', sortable: true }
    ])
    onMounted(() => {
      getInvaccpars()
    })
    const getInvaccpars = async () => {
      visible.value = true
      const { data } = await api.get(path)
      dataInvaccpars.value = data
      visible.value = false
    }
    const creating = () => {
      onReset()
      dialog.value = true
    }
    const onReset = () => {
      code.value = null
      description.value = null
      idledaccinc.value = null
      idinvledacc.value = null
      idexpledacc.value = null
      idaccaccwitsoupurdec.value = null
      idaccaccwitsounonrep.value = null
      idcoscen.value = null
      iddecwitcon.value = null
      idnonfilwitcon.value = null
      idledaccentrremdeb.value = null
      identremcredelacc.value = null
      idledaccdeboutrem.value = null
      idoutremcreledacc.value = null
      isEditing.value = false
      active.value = false
    }
    const onSubmit = () => {
      myForm.value.validate().then(async success => {
        if (success) {
          api.post(path, {
            code: code.value,
            description: description.value,
            idledaccinc: idledaccinc.value,
            idinvledacc: idinvledacc.value,
            idexpledacc: idexpledacc.value,
            idaccaccwitsoupurdec: idaccaccwitsoupurdec.value,
            idaccaccwitsounonrep: idaccaccwitsounonrep.value,
            idcoscen: idcoscen.value,
            iddecwitcon: iddecwitcon.value,
            idnonfilwitcon: idnonfilwitcon.value,
            idledaccentrremdeb: idledaccentrremdeb.value,
            identremcredelacc: identremcredelacc.value,
            idledaccdeboutrem: idledaccdeboutrem.value,
            idoutremcreledacc: idoutremcreledacc.value,
          }).then(() => {
            dialog.value = false
            getInvaccpars()
          })
        }
      })
    }
    const editing = (row) => {
      onReset()
      dialog.value = true
      isEditing.value = true
      id.value = row.id
      code.value = row.code
      description.value = row.description
      idledaccinc.value = row.idledaccinc
      idinvledacc.value = row.idinvledacc
      idexpledacc.value = row.idexpledacc
      idaccaccwitsoupurdec.value = row.idaccaccwitsoupurdec
      idaccaccwitsounonrep.value = row.idaccaccwitsounonrep
      idcoscen.value = row.idcoscen
      iddecwitcon.value = row.iddecwitcon
      idnonfilwitcon.value = row.idnonfilwitcon
      idledaccentrremdeb.value = row.idledaccentrremdeb
      identremcredelacc.value = row.identremcredelacc
      idledaccdeboutrem.value = row.idledaccdeboutrem
      idoutremcreledacc.value = row.idoutremcreledacc
    }
    const onEditing = () => {
      myForm.value.validate().then(async success => {
        if (success) {
          api.patch(path + '/' + id.value, {
            code: code.value,
            description: description.value,
            idledaccinc: idledaccinc.value,
            idinvledacc: idinvledacc.value,
            idexpledacc: idexpledacc.value,
            idaccaccwitsoupurdec: idaccaccwitsoupurdec.value,
            idaccaccwitsounonrep: idaccaccwitsounonrep.value,
            idcoscen: idcoscen.value,
            iddecwitcon: iddecwitcon.value,
            idnonfilwitcon: idnonfilwitcon.value,
            idledaccentrremdeb: idledaccentrremdeb.value,
            identremcredelacc: identremcredelacc.value,
            idledaccdeboutrem: idledaccdeboutrem.value,
            idoutremcreledacc: idoutremcreledacc.value,
          }).then(() => {
            dialog.value = false
            getInvaccpars()
          })
        }
      })
    }
    const onDelete = (row) => {
      $q.dialog({
        title: 'Confirmación',
        message: '¿Está seguro que desea eliminar la invaccpar: ' + row.id + '?',
        ok: {
          label: 'Si',
          color: 'positive'
        },
        cancel: {
          label: 'No',
          color: 'negative'
        }
      }).onOk(() => {
        api.delete(path + '/' + row.id).then(response => {
          dialog.value = false
          getInvaccpars()
        })
      })
    }
    return {
      dialog,
      dataInvaccpars,
      isEditing,
      role,
      active,
      myForm,
      pagination,
      creating,
      columns,
      visible,
      filter,
      code,
      description,
      idledaccinc,
      idinvledacc,
      idexpledacc,
      idaccaccwitsoupurdec,
      idaccaccwitsounonrep,
      idcoscen,
      iddecwitcon,
      idnonfilwitcon,
      idledaccentrremdeb,
      identremcredelacc,
      idledaccdeboutrem,
      idoutremcreledacc,
      onReset,
      onSubmit,
      editing,
      onEditing,
      id,
      onDelete,
    }
  }
})
</script>
