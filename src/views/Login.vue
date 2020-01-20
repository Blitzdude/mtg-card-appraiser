<template>
    <el-form :model="ruleForm" ref="form" label-width="80px">
        <el-form-item label="Username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="ruleForm.password" placeholder=""></el-input>
            
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
    
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        onSubmit() {
            this.ruleForm.username = "Submited!!!";
        }
    }
}
</script>